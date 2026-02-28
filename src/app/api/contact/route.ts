import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.PRISMA_DATABASE_URL,
    ssl: { rejectUnauthorized: false } // Required for Vercel Serverless Postgres
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const client = await pool.connect();
        try {
            const queryText = 'INSERT INTO contact_messages(name, email, message) VALUES($1, $2, $3) RETURNING id';
            const values = [name, email, message];
            const result = await client.query(queryText, values);

            return NextResponse.json({ success: true, id: result.rows[0].id }, { status: 201 });
        } finally {
            client.release();
        }
    } catch (error) {
        console.error('Error in /api/contact:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
