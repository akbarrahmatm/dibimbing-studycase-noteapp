import { Heading, Image, Stack, Text, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      py={6} // Padding on top and bottom
      px={4} // Padding on left and right
      bg="teal.500" // Background color
      color="white" // Text color
      borderRadius="md" // Rounded corners
      shadow="md" // Shadow for depth
      textAlign="center" // Center-align text
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
