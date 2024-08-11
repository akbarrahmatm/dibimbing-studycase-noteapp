import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const note = await db.note.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!note) {
      return NextResponse.json(
        {
          status: "Failed",
          message: `Note with id '${id}' is not found`,
          requestAt: new Date(),
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: "Success",
        message: "Note successfully retrieved",
        requestAt: new Date(),
        data: { note },
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
