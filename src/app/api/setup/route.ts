import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.PRISMA_DATABASE_URL,
    ssl: { rejectUnauthorized: false } // Required for Vercel Serverless Postgres
});

export async function GET() {
    try {
        const client = await pool.connect();

        try {
            await client.query(`
          CREATE TABLE IF NOT EXISTS contact_messages (
              id SERIAL PRIMARY KEY,
              name VARCHAR(255) NOT NULL,
              email VARCHAR(255) NOT NULL,
              message TEXT NOT NULL,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
        `);
        } finally {
            client.release();
        }

        return NextResponse.json(
            { success: true, message: "Database table created successfully!" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Setup Error:", error);
        return NextResponse.json(
            { error: "Failed to create table", details: error.message },
            { status: 500 }
        );
    }
}
