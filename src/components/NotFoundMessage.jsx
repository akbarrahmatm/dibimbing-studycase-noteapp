import { Heading, Image, Text } from "@chakra-ui/react";

export default function NotFoundMessage({ errorMessage }) {
  return (
    <>
      <Image mt={100} width={"100px"} src="/assets/memo.png" />
      <Heading mt={10} fontWeight={"medium"} fontSize={"2rem"}>
        No Notes Found
      </Heading>
      <Text fontWeight={"medium"} fontSize={"1rem"} mt={2}>
        Start Writing Your Notes
      </Text>
    </>
  );
}
