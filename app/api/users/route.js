import { NextResponse } from "next/server";

export async function POST(req, res) {
  let { username, email, password } = await req.json();
  if (!email || !password || !username) {
    console.log({ username: username, email: email, password: password });
    return NextResponse.json(
      { message: "All fields not provided", ok: false },
      { status: 400 }
    );
  } else {
    console.log({ username: username, email: email, password: password });
    return NextResponse.json(
      { message: "Data fetched successfully", ok: true },
      { status: 201 }
    );
  }
}
