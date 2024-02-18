import { NextResponse } from "next/server";
import { users } from "../utils/db";

export function GET() {
    const data = users;
    return NextResponse.json({data})
}