import { Button, Box } from "@chakra-ui/react";
import Link from "next/link";
import NoteDetail from "./NoteDetail";

export default function NoteDetailContainer() {
  return (
    <>
      <Box display="flex" mb={6} justifyContent="flex-start">
        <Link href={"/"}>
          <Button colorScheme="teal"> {`< Back To Notes`}</Button>
        </Link>
      </Box>

      <NoteDetail />
    </>
  );
}
