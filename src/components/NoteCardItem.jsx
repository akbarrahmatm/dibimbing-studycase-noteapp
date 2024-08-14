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

import dayjs from "dayjs";

const handleClickDetail = () => {
  Swal.fire({
    title: "Do you want to save the changes?",
    showCancelButton: true,
    confirmButtonText: "Save",
    confirmButtonColor: "red",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    }
  });
};

const handleDeleteNote = () => {
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
      Swal.fire("Saved!", "", "success");
    }
  });
};

export default function NoteCardItem({ title, idNote, createdAt }) {
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
            <Button colorScheme="teal">Detail</Button>
            <Button colorScheme="yellow">Edit</Button>
            <Button onClick={handleDeleteNote} colorScheme="red">
              Delete
            </Button>
          </ButtonGroup>
        </Flex>
      </CardBody>
    </>
  );
}
