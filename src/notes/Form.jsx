import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const id = window.location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchNote = async () => {
      axios.get("http://localhost:3000/notes/" + id).then((response) => {
        setNote({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
        });
      });
    };

    fetchNote();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      try {
        await axios.put("http://localhost:3000/notes/" + id, note);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const params = {
          ...note,
          id: Math.floor(Math.random() * 1000).toString(),
        };
        await axios.post("http://localhost:3000/notes", params);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box width="100%" p="5" style={{ maxWidth: 400, margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Title
            </Text>
            <TextField.Input
              value={id ? note.title : ""}
              placeholder="Enter your full name"
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextArea
              placeholder="Enter your email"
              value={id ? note.description : ""}
              onChange={(e) =>
                setNote({ ...note, description: e.target.value })
              }
            />
          </label>
          <Button>{id ? "Update" : "Create"}</Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Form;
