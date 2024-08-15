import { Container, Heading, Image, Text } from "@chakra-ui/react";

export default function ErrorMessage({ errorMessage }) {
  return (
    <>
      <Container centerContent>
        <Image mt={100} width={"100px"} src="/assets/error.png" />
        <Heading mt={10} fontWeight={"medium"} fontSize={"2rem"}>
          An Error Occured
        </Heading>
        <Text fontSize={"1.2rem"} mt={2}>
          {errorMessage}
        </Text>
        <Text fontWeight={"medium"} fontSize={"1rem"} mt={2}>
          Please Try Again Later
        </Text>
      </Container>
    </>
  );
}
