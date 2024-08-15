import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function POST(req) {
  try {
    const { title, body } = await req.json();

    // Validation process
    const missingFields = [];

    if (!title || title === null || title === "") {
      missingFields.push("Title");
    }
    if (!body || body === null || body === "") {
      missingFields.push("Note Body");
    }

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          status: "Failed",
          message: `${missingFields.join(", ")} should be required!`,
          requestAt: new Date(),
        },
        { status: 400 }
      );
    }

    const newNote = await db.note.create({
      data: {
        title,
        body,
      },
    });

    if (!newNote) {
      throw Error("Unexpected Error, Failed to create new note");
    }

    return NextResponse.json(
      {
        status: "Success",
        message: "Data is successfully created",
        requestAt: new Date(),
        data: { newNote },
      },
      { status: 201 }
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
