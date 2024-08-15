import { Heading, Image, Stack, Text, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      py={6}
      px={4}
      bg="teal.500"
      color="white"
      borderRadius="md"
      shadow="md"
      textAlign="center"
    >
      <Stack spacing={4}>
        <Stack
          direction={["column", "row"]}
          spacing={4}
          align="center"
          justify="center"
        >
          <Image src="/assets/memo.png" w="auto" height={"3rem"} />
          <Heading size="xl" fontWeight="bold">
            Notes App
          </Heading>
        </Stack>
        <Text fontSize="md" fontWeight="medium">
          Write your notes here ✨
        </Text>
      </Stack>
    </Box>
  );
}
