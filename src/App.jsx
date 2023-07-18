import { Box, useDisclosure } from '@chakra-ui/react'
// import Nav from './components/Nav'
import Hero from './components/Hero'
import InputModal from './components/InputModal'
import React, { useState } from 'react'
import TodoList from './components/TodoList'
const data1 = [
  {
    id:1,
    task: "Update Windows",
    taskNote: "Ajj hi karn na hai lazami argent hai warna khair nahi ap ki",
  },
  {
    id:2,
    task: "Update Windows",
    taskNote: "Ajj hi karn na hai lazami argent hai warna khair nahi ap ki",
  },
  {
    id:3,
    task: "Update Windows",
    taskNote: "Ajj hi karn na hai lazami argent hai warna khair nahi ap ki",
  },
  {
    id:4,
    task: "Update Windows",
    taskNote: "Ajj hi karn na hai lazami argent hai warna khair nahi ap ki",
  },
];

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState(data1);
  const [edit, setEdit] = useState(null);
  
  const addTodo = (e) => {
     setData([...data, { ...e, id: data.length + 1 }])
     console.log(data);
  }
  const removeTodo = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData)
  }

  const handleEdit = (id) => {
    setEdit(data.find((v) => v.id === id))
    
    
  }
  const updateData = (item) => {
    const index = data.findIndex((e)=> e.id === item.id)
    const newData = [...data]
    newData.splice(index,1,item)
    setData(newData)
  }

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <Box  w={'full'}>
        <Hero onOpen={onOpen}/>
        <TodoList mdData={data} removeTodo={removeTodo} handleEdit={handleEdit} onOpen={onOpen}/>

        <InputModal addTodo={addTodo} edit={edit} isOpen={isOpen} onOpen={onOpen} onClose={onClose}  finalRef={finalRef} initialRef={initialRef} updateData={updateData}/>
    </Box>
  )
}

export default App