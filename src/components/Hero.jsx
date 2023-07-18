import { Button, HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";

const Hero = ({ onOpen }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  return (
    <Stack
      w={["80dvw", "70dvw"]}
      borderRadius={"20"}
      h={"44dvh"}
      bgColor={"linkedin.200"}
      shadow={"xl"}
      mt={["20", "16"]}
      mx={"auto"}
      justifyContent={"space-around"}
      alignItems={"center"}
      p={["6", "16"]}
    >
      <VStack>
        <Heading
          fontSize={["3rem", "6rem"]}
          fontFamily={"sans-serif"}
          textTransform={"uppercase"}
        >
          My Day
        </Heading>
        <Text fontSize={["1rem", "2rem"]}>{today.toLocaleDateString("en-US", options)}</Text>
      </VStack>
      <HStack mt={"6"} p={"2"}>
        <Text fontSize={["1rem", "2rem"]}>New To-Do</Text>
        <Button ml={"3"} onClick={onOpen} colorScheme={"linkedin"}>
          Add
        </Button>
      </HStack>
    </Stack>
  );
};

export default Hero;
