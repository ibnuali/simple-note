import { useState } from "react";
import Notes from "./notes/Notes";
import { Container } from "@radix-ui/themes";

function App() {
  return (
    <Container pt={"9"}>
      <Notes />
    </Container>
  );
}

export default App;
