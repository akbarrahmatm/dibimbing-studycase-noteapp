import { createNotes } from "@/services/notes.service";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Bounce } from "react-toastify";
import Swal from "sweetalert2";
import ErrorMessage from "./ErrorMessage";

export default function NoteForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [newNotes, setNewNotes] = useState();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const [titleFormError, setTitleFormError] = useState();
  const [bodyFormError, setBodyFormError] = useState();

  const sendNote = async () => {
    setIsLoading(true);
    try {
      const data = JSON.stringify({
        title,
        body,
      });

      const response = await createNotes(data);

      console.log(response);

      setNewNotes(response);

      if (response) {
        Swal.fire({
          title: "Success",
          text: "Notes is successfully saved",
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "Go To Notes",
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
    setIsLoading(false);
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
      {isLoading === false && error && !newNotes && (
        <ErrorMessage errorMessage={error} />
      )}

      <Box width={{ base: "100%", md: "70%", lg: "50%" }} m="auto">
        <FormControl>
          <FormLabel>Note Title</FormLabel>
          <Input
            placeholder="Write your title here ..."
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
          {titleFormError && <FormHelperText>{titleFormError}</FormHelperText>}
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Note Body</FormLabel>
          <Textarea
            rows={15}
            placeholder="Write your notes here ..."
            onChange={(e) => setBody(e.target.value)}
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
            {!isLoading && "Save"}
            {isLoading && <Spinner />}
          </Button>
        </Box>
      </Box>
    </>
  );
}
