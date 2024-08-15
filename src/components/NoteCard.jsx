import { Card } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NoteCardItem from "./NoteCardItem";
import { getAllNotes } from "../services/notes.service";
import NoteCardLoading from "./NoteCardLoading";

import { toast, Bounce } from "react-toastify";
import ErrorMessage from "./ErrorMessage";
import NotFoundMessage from "./NotFoundMessage";

export default function NoteCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [notes, setNotes] = useState();

  const fetchNotes = async () => {
    setIsLoading(true);

    try {
      const response = await getAllNotes();

      setNotes(response.data.notes);
    } catch (err) {
      setError(err.message);

      toast.error(err.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      {isLoading === false && error && !notes && (
        <ErrorMessage errorMessage={error} />
      )}

      {isLoading === false && notes && notes.length === 0 && !error && (
        <NotFoundMessage />
      )}

      <Card width="90%">
        {isLoading === true && <NoteCardLoading />}
        {!isLoading &&
          notes &&
          notes.length > 0 &&
          notes.map((note) => (
            <NoteCardItem
              key={note.id}
              idNote={note.id}
              title={note.title}
              createdAt={note.createdAt}
              fetchNotes={fetchNotes}
            />
          ))}
      </Card>
    </>
  );
}
