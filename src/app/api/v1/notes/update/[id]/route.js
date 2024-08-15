import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function PATCH(req, { params }) {
  try {
    const id = parseInt(params.id);

    const checkNote = await db.note.findUnique({
      where: {
        id,
      },
    });

    if (!checkNote) {
      return NextResponse.json(
        {
          status: "Failed",
          message: `Note with id '${id}' is not found`,
          requestAt: new Date(),
        },
        { status: 404 }
      );
    }

    const { title, body } = await req.json();

    const updatedNote = await db.note.update({
      where: {
        id,
      },
      data: {
        title,
        body,
      },
    });

    if (!updatedNote) {
      throw Error("Unexpected Error, Failed to update note");
    }

    return NextResponse.json(
      {
        status: "Success",
        message: "Data is successfully updated",
        requestAt: new Date(),
        data: { updatedNote },
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
