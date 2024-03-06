import React from "react";
import { Box, Container, Heading, SimpleGrid, Image, Text, VStack, Button, Flex, Spacer } from "@chakra-ui/react";
import { FaCameraRetro, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  const portfolioImages = ["https://images.unsplash.com/photo-1532598187460-98fe8826d1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MDk3NTQzNTh8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/flagged/photo-1552981941-424aac2b4311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzA5NzU0MzU4fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1603775020644-eb8decd79994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcwOTc1NDM1OXww&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1579976327048-ee8afcadda27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcwOTc1NDM1OXww&ixlib=rb-4.0.3&q=80&w=1080"];

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} as="header" my={10} textAlign="center">
        <Heading as="h1" size="2xl">
          Jane Doe Photography
        </Heading>
        <Text fontSize="lg">Capturing moments from today… Creating memories for a lifetime.</Text>
      </VStack>

      <SimpleGrid columns={[1, 2, 3]} spacing={10} as="section" mb={10}>
        {portfolioImages.map((src, index) => (
          <Image key={index} src={src} alt={`Portfolio image ${index + 1}`} borderRadius="md" />
        ))}
      </SimpleGrid>

      <Flex as="footer" py={5} borderTop="1px" borderColor="gray.200">
        <Button leftIcon={<FaCameraRetro />} colorScheme="teal" variant="solid">
          Book a Session
        </Button>
        <Spacer />
        <Button as="a" href="mailto:jane.doe@example.com" leftIcon={<FaEnvelope />} colorScheme="gray" variant="ghost">
          jane.doe@example.com
        </Button>
        <Button as="a" href="https://instagram.com" leftIcon={<FaInstagram />} colorScheme="pink" variant="ghost">
          Instagram
        </Button>
        <Button as="a" href="https://twitter.com" leftIcon={<FaTwitter />} colorScheme="blue" variant="ghost">
          Twitter
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
