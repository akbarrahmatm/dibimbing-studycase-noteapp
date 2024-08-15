import { getNoteById, updateNotes } from "@/services/notes.service";
import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
  Spinner,
} from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import Swal from "sweetalert2";
import ErrorMessage from "./ErrorMessage";

export default function NoteEditForm() {
  const router = useRouter();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  const [error, setError] = useState();
  const [note, setNote] = useState();
  const [newNotes, setNewNotes] = useState();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [titleFormError, setTitleFormError] = useState();
  const [bodyFormError, setBodyFormError] = useState();

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    setIsLoadingData(true);
    try {
      const response = await getNoteById(params.id);

      if (!response || !response.data || !response.data.note) {
        throw new Error("Note not found. Please check the ID and try again.");
      }

      setNote(response.data.note);
      setTitle(response.data.note.title);
      setBody(response.data.note.body);
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
    setIsLoadingData(false);
  };

  const sendNote = async () => {
    setIsLoadingUpdate(true);
    try {
      const data = JSON.stringify({
        title,
        body,
      });

      const response = await updateNotes(params.id, data);

      setNewNotes(response);

      if (response) {
        Swal.fire({
          title: "Success",
          text: "Notes is successfully updated",
          icon: "success",
          showConfirmButton: true,
          confirmButtonColor: "#319795",
          confirmButtonText: "Back To Notes",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/");
          } else {
            router.push("/");
          }
        });
      }
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
    setIsLoadingUpdate(false);
  };

  const handleClickSave = () => {
    let valid = true;

    if (!title) {
      setTitleFormError("Note title is required");
      valid = false;
    } else {
      setTitleFormError("");
    }

    if (!body) {
      setBodyFormError("Note body is required");
      valid = false;
    } else {
      setBodyFormError("");
    }

    if (!valid) {
      return;
    }

    sendNote();
  };

  return (
    <>
      {isLoadingData === false && error && !newNotes && (
        <>
          <ErrorMessage errorMessage={error} />
        </>
      )}

      <Box width={{ base: "100%", md: "70%", lg: "50%" }} m="auto">
        <FormControl>
          <FormLabel>Note Title</FormLabel>
          <Input
            placeholder={
              isLoadingData ? "Loading ..." : "Write your title here ..."
            }
            isDisabled={isLoadingData}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="title"
          />
          {titleFormError && <FormHelperText>{titleFormError}</FormHelperText>}
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Note Body</FormLabel>
          <Textarea
            isDisabled={isLoadingData}
            rows={15}
            placeholder={
              isLoadingData ? "Loading ..." : "Write your notes here ..."
            }
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></Textarea>
          {bodyFormError && <FormHelperText>{bodyFormError}</FormHelperText>}
        </FormControl>
        <Box display="flex" justifyContent="flex-end">
          <Button
            isDisabled={isLoading}
            onClick={handleClickSave}
            mt={5}
            colorScheme="teal"
          >
            {isLoadingUpdate || isLoadingData ? <Spinner /> : "Update"}
          </Button>
        </Box>
      </Box>
    </>
  );
}
