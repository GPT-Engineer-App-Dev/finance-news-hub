import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Global Market Trends",
    description: "An in-depth look at the current trends in the global market.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Innovations 2023",
    description: "The latest innovations in the tech industry for the year 2023.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Economic Outlook",
    description: "Predictions and analysis of the economic outlook for the next quarter.",
    image: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Market hits all-time high",
  "New tech startups to watch",
  "Economic policies to be aware of",
];

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="md">Financial Times</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>

      <Flex mt={8} direction={{ base: "column", md: "row" }} spacing={8}>
        <Box flex="3">
          <Heading size="lg" mb={4}>Latest News</Heading>
          <Stack spacing={8}>
            {articles.map((article, index) => (
              <Flex key={index} bg="gray.100" p={4} borderRadius="md" boxShadow="md">
                <Image src={article.image} alt={article.title} boxSize="150px" objectFit="cover" mr={4} />
                <Box>
                  <Heading size="md">{article.title}</Heading>
                  <Text mt={2}>{article.description}</Text>
                </Box>
              </Flex>
            ))}
          </Stack>
        </Box>

        <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
          <Heading size="lg" mb={4}>Trending</Heading>
          <VStack spacing={4} align="start">
            {trendingArticles.map((title, index) => (
              <Text key={index} bg="gray.100" p={4} borderRadius="md" boxShadow="md" width="100%">
                {title}
              </Text>
            ))}
          </VStack>
        </Box>
      </Flex>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link as={RouterLink} to="/contact">Contact</Link>
            <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;