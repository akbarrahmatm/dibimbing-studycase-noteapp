import { Button, Box } from "@chakra-ui/react";
import Link from "next/link";
import NoteEditForm from "./NoteEditForm";

export default function NoteEditContainer() {
  return (
    <>
      <Box display="flex" mb={6} justifyContent="flex-start">
        <Link href={"/"}>
          <Button colorScheme="teal"> {`< Back To Notes`}</Button>
        </Link>
      </Box>
      <NoteEditForm />
    </>
  );
}
