import { Card } from "@chakra-ui/react";
import NoteCardItem from "./NoteCardItem";

export default function NoteCard() {
  return (
    <>
      <Card width="90%">
        <NoteCardItem />
        <NoteCardItem />
        <NoteCardItem />
      </Card>
    </>
  );
}
