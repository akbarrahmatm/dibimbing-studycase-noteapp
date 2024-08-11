import { Button, Box } from "@chakra-ui/react";
import NoteCard from "./NoteCard";

export default function NoteContainer() {
  return (
    <>
      <Box display="flex" mb={6} justifyContent="flex-end">
        <Button colorScheme="teal">+ Add New Note</Button>
      </Box>
      <NoteCard />
    </>
  );
}
