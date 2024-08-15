import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function DELETE(req, { params }) {
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

    const deleteNote = await db.note.delete({
      where: {
        id,
      },
    });

    if (!deleteNote) {
      throw Error("Unexpected Error, Failed to delete note");
    }

    return NextResponse.json(
      {
        status: "Success",
        message: "Data is successfully deleted",
        requestAt: new Date(),
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
