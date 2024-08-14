"use client";

import Header from "@/components/Header";
import NoteAddContainer from "@/components/NoteAddContainer";
import NoteContainer from "@/components/NoteContainer";
import { Container, Center } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function AddNotePage() {
  return (
    <Container
      maxW={{ base: "100%", sm: "90%", md: "80%", lg: "70%" }}
      boxShadow="md"
      p={{ base: 4, md: 6 }}
      rounded="md"
      bg="white"
      minH="100vh"
      color="#262626"
    >
      <Center mb={6}>
        <Header />
      </Center>

      <ToastContainer />
      <NoteAddContainer />
    </Container>
  );
}
