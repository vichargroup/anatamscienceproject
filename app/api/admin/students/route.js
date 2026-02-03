import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Registration from "../../../models/Registration";

export async function GET(req) {
  const adminKey = req.headers.get("x-admin-key");

  if (adminKey !== process.env.ADMIN_SECRET) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  await connectDB();
  const students = await Registration.find().sort({ createdAt: -1 });

  return NextResponse.json({ success: true, students });
}
