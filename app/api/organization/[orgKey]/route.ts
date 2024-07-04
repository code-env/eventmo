import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {} = await req.json();
  } catch (error) {
    return NextResponse.json({
      message: "something is going on",
    });
  }
}
