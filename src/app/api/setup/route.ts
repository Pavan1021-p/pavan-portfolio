import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
    try {
        await query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

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
