import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Registration from "../../models/Registration";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const saved = await Registration.create(body);

    return NextResponse.json({
      success: true,
      studentName: saved.studentName,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
