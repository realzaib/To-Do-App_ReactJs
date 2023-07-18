import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const TodoList = ({ mdData, removeTodo, onOpen, handleEdit }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(mdData);
  }, [mdData]);

  const handleRemove = (id) => {
    removeTodo(id);
  };

  const handleUpdate = (id) => {
    onOpen()
    handleEdit(id);
  };

  const handleLinePass = (id) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <Box
        mx={"auto"}
        mt={["8", "12"]}
        w={["80dvw", "70dvw"]}
        borderRadius={"20"}
        bgColor={"linkedin.200"}
        shadow={"xl"}
        p={["6", "16"]}
        mb={"16"}
      >
        <Accordion allowToggle>
          {data.map((task) => (
            <AccordionItem
              key={task.id}
              bgColor={"linkedin.200"}
              borderColor={"linkedin.800"}
            >
              <h2>
                <AccordionButton>
                  <Checkbox
                    checked={task.completed}
                    onChange={() => handleLinePass(task.id)}
                  />
                  <Box as="span" flex="1" textAlign="left" mx={"4"}>
                    <Text
                      textDecoration={task.completed ? "line-through" : "none"}
                    >
                      {task.task}
                    </Text>
                    <Text fontSize={"sm"}>{task.label}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"linkedin.100"}
              >
                <Text textAlign={"left"} w={"full"}>
                  {task.taskNote}
                </Text>
                <HStack
                  w={"full"}
                  mt={"2"}
                  flexDirection={["row", "row-reverse"]}
                >
                  <Button
                    variant={"solid"}
                    size={"sm"}
                    colorScheme="linkedin"
                    onClick={() => handleRemove(task.id)}
                  >
                    Remove
                  </Button>
                  <Button
                    variant={"solid"}
                    size={"sm"}
                    colorScheme="linkedin"
                    onClick={() => handleUpdate(task.id)}
                  >
                    Edit
                  </Button>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </>
  );
};

export default TodoList;
