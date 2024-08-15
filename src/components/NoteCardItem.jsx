"use client";

import {
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Flex,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import Swal from "sweetalert2";
import { deleteNotes } from "@/services/notes.service";
import dayjs from "dayjs";
import { toast, Bounce } from "react-toastify";
import { useRouter } from "next/navigation";

export default function NoteCardItem({ title, idNote, createdAt, fetchNotes }) {
  const router = useRouter();

  const handleClickDetail = (id) => {
    if (id) {
      router.push(`/detail/${id}`);
    } else {
      Swal.fire({
        title: "Oooppsss",
        icon: "question",
        iconColor: "red",
        text: "An error occured",
      });
    }
  };

  const processDelete = async (id, fetchNotes) => {
    try {
      const response = await deleteNotes(id);

      if (response) {
        fetchNotes();
      }
    } catch (err) {
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
  };

  const handleDeleteNote = (id, fetchNotes) => {
    Swal.fire({
      title: "Delete Notes?",
      icon: "question",
      iconColor: "red",
      text: "Once you delete a notes, it can't be recovered",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      confirmButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        processDelete(id, fetchNotes);
      }
    });
  };
  return (
    <>
      <CardBody>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          <Stack divider={<StackDivider />} spacing="4" flex="1">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {title}
              </Heading>
              <Text pt="2" fontSize="sm">
                ID: {idNote} |{" "}
                {dayjs(createdAt).format("dddd, DD MMMM YYYY HH:mm:ss")}
              </Text>
            </Box>
          </Stack>

          <ButtonGroup
            spacing={2}
            size="sm"
            mt={{ base: 4, md: 0 }}
            ml={{ md: 4 }}
          >
            <Button
              onClick={() => handleClickDetail(idNote)}
              colorScheme="teal"
            >
              Detail
            </Button>
            <Button colorScheme="yellow">Edit</Button>
            <Button
              onClick={() => handleDeleteNote(idNote, fetchNotes)}
              colorScheme="red"
            >
              Delete
            </Button>
          </ButtonGroup>
        </Flex>
      </CardBody>
    </>
  );
}
