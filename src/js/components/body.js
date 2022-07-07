import React, { useState } from "react";
import ReactBootstrap, { Container, InputGroup, Form, Button, Row } from "react-bootstrap";
import Username from "./username";
import party from "party-js";
import Result from "./result";

export default function Body() {
  const [username, setUsername] = useState("username");
  const [checkButtonDisabled, setCheckButtonDisabled] = useState(false);

  const check = (e) => {
    setCheckButtonDisabled(true);
    party.confetti(e);

  };

  return (
    <Container className="text-center">
      <h2 className="pt-5 text-primary" id="sot">
        Is
        <Username username={username} />
        <br />
        shadowbanned on Twitter?
      </h2>
      <div className="d-flex justify-content-center pt-4 mx-2">
        <InputGroup className="mt-3">
          <InputGroup.Text id="addon-wrapping">@</InputGroup.Text>
          <Form.Control id="user" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} aria-label="Recipient's username" className="form-control-lg" />
          <Button variant="success" id="check" disabled={checkButtonDisabled} onClick={(e) => check(e.target)}>Check</Button>
        </InputGroup>
      </div>
      <Row className="d-flex justify-content-center my-5" id="ac">
        <div className="col-12" id="result-field"><Result username={username} active="secondary" /></div>
      </Row>
    </Container>
  )
}