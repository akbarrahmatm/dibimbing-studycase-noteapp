import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function NoteForm() {
  const handleClickSave = () => {
    console.log("clicked");
  };

  return (
    <>
      <Box width={{ base: "100%", md: "70%", lg: "50%" }} m="auto">
        <FormControl>
          <FormLabel>Note Title</FormLabel>
          <Input
            placeholder="Write your title here ..."
            type="text"
            id="title"
          />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Note Body</FormLabel>
          <Textarea
            rows={15}
            placeholder="Write your notes here ..."
          ></Textarea>
        </FormControl>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={handleClickSave} mt={5} colorScheme="teal">
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
}
