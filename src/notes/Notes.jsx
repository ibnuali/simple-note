import {
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Notes() {
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      axios.get("http://localhost:3000/notes").then((response) => {
        setNotes(response.data);
      });
    };

    fetchNotes();
  }, []);
  return (
    <>
      <Heading>Notes App</Heading>
      <Flex
        direction="row"
        gap="3"
        justify={"end"}
        style={{ maxWidth: "100%" }}
      >
        <Button mb={"8"} onClick={() => navigate("/create")}>
          Add Note
        </Button>
      </Flex>

      <Grid columns={3} gap="3" width={"auto"}>
        {notes.map((note) => {
          return (
            <Card
              variant="classic"
              style={{ cursor: "pointer" }}
              key={note.id}
              onClick={() => navigate(`/edit/${note.id}`)}
            >
              <Text as="div" size="2" weight="bold">
                {note.title}
              </Text>
              <Text as="div" color="gray" size="2">
                {note.description}
              </Text>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}

export default Notes;
