import React from "react";
import { Container } from "@material-ui/core/";

export default function Success() {
  return (
    <Container maxWidth="sm">
      <h1>
        Thank you for your submission.
      </h1>
      <p>You will recieve an email with further information.</p>
    </Container>
  );
}
