import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const InputModal = ({ addTodo, isOpen, initialRef,onOpen, finalRef, onClose, edit,updateData }) => {
  const [nData, setNData] = useState({
    task: null,
    taskNote: null
  });

  const handleDataInput = (e) => {
    setNData({ ...nData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nData.task || !nData.taskNote) {
      alert("Please fill in all required fields");
      return;
    }

    if(edit){
      updateData(nData)
      setNData({
        task: null,
        taskNote: null
      });
      onClose()
    }else{
      
    addTodo(nData);
    setNData({
      task: null,
      taskNote: null
    });
    onClose()
    }


  };

  useEffect(()=>{
    if(edit){
      setNData(edit)

    }
  }, [edit])

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={["xs", "md"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{edit?'Update':'Create'} your To-Do</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Task</FormLabel>
              <Input
                required
                placeholder="Enter Task"
                name="task"
                onChange={handleDataInput}
                value={nData.task || ""}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Note About Task</FormLabel>
              <Textarea
                required
                placeholder="Enter Note"
                name="taskNote"
                onChange={handleDataInput}
                value={nData.taskNote || ""}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="linkedin" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InputModal;
