import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function GET() {
  try {
    const notes = await db.note.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        status: "Success",
        message: "Notes successfully retrieved",
        requestAt: new Date(),
        data: { notes },
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        status: "Failed",
        message: err.message,
        requestAt: new Date(),
      },
      { status: 500 }
    );
  }
}
