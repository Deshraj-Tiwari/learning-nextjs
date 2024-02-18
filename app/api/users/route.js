import { NextResponse } from "next/server"

export async function POST(req, res) {
    let {email, password, } = await req.json()
    console.log({email: email, password: password})

    if (!email || !password) {
        return NextResponse.json({message: "Email and password are required"}, {status: 400})
    } else{
        return NextResponse.json({message: "Data fetched successfully"})
    }

}