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

export default function NoteCardItem() {
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
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                ID: 999 | Created At: DD MM YYYY
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
            <Button colorScheme="red">Delete</Button>
          </ButtonGroup>
        </Flex>
      </CardBody>
    </>
  );
}
