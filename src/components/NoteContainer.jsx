import { Button, Box } from "@chakra-ui/react";
import Link from "next/link";
import NoteCard from "./NoteCard";

export default function NoteContainer() {
  return (
    <>
      <Box display="flex" mb={6} justifyContent="flex-end">
        <Link href={"/add"}>
          <Button colorScheme="teal">+ Add New Note</Button>
        </Link>
      </Box>
      <NoteCard />
    </>
  );
}
