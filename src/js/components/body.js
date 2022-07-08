import React, { useState } from "react";
import ReactBootstrap, { Container, InputGroup, Form, Button, Row } from "react-bootstrap";
import Username from "./username";
import party from "party-js";
import Result from "./result";
import Axios from "axios";

const axios = Axios.create({
  validateStatus() {
    return true;
  },
  responseType: "json"
});

export default function Body() {
  const [username, dSetUsername] = useState("username");
  const [checkButtonDisabled, setCheckButtonDisabled] = useState(false);
  const [statuses, setStatuses] = useState(new Array(5).fill("secondary"));
  const [resp, setResp] = useState("");

  const check = async (e) => {
    if (username === "username") return;
    setCheckButtonDisabled(true);
    party.confetti(e);
    const accordions = document.querySelectorAll(".results");
    setStatuses((s) => [s[0], "spinner", "spinner", "spinner", "spinner"]);
    const checkUrl = `https://api.vxxx.cf/twitter/available?screen_name=${username}`;
    const checkRes = await axios.get(checkUrl);
    const { data: checkData } = checkRes;
    let url;
    if (checkData.available) {
      url = `https://api.vxxx.cf/twitter/shadowban?user_id=${username}`;
    } else {
      url = `https://api.vxxx.cf/twitter/shadowban?screen_name=${username}`;
    }
    const { data } = await axios.get(url);
    const chil = document.getElementById("user_").children;
    if (data.not_found) {
      setStatuses((s) => ["danger", "secondary", "secondary", "secondary", "secondary"]);
      setResp(`@${username}  Not found ❓`);
    } else if (data.suspend) {
      setStatuses((s) => ["danger", "secondary", "secondary", "secondary", "secondary"]);
      setResp(`@${username}  Suspend 🧊`);
    } else if (data.protect) {
      setStatuses((s) => ["danger", "secondary", "secondary", "secondary", "secondary"]);
      setResp(`@${data.user.legacy.screen_name}  Protect 🔒`);
    } else if (data.no_tweet) {
      setStatuses((s) => ["danger", "secondary", "secondary", "secondary", "secondary"]);
      setResp(`@${data.user.legacy.screen_name}  No tweet 😶`);
    } else if (data.error == 429) {
      setStatuses((s) => ["danger", "secondary", "secondary", "secondary", "secondary"]);
      setResp(`APIのレートリミットです,時間をおいて試してください`);
    } else {
      setResp(`@${data.user.legacy.screen_name}  Exists`);
      let lis;
      if (data.no_reply) {
        lis = [data.search_suggestion_ban, data.search_ban, false, false]
      } else {
        lis = [data.search_suggestion_ban, data.search_ban, data.ghost_ban, data.reply_deboosting]
      }
      setStatuses((s) => ["success", ...lis.map((li, i) => li ? "danger" : "success")]);
    }
    setCheckButtonDisabled(false);
  };

  let curb = username;
  const setUsername = (mn) => {
    if (!mn) {
      curb = "username";
      dSetUsername("username");
    }
    if (!mn.match(/^[a-zA-Z0-9_]+$/)) {
      return;
    }
    if (curb === "username" && username !== "username") {
      curb = "username";
      dSetUsername("username");
    } else {
      curb = mn;
      dSetUsername(mn);
    }
  }

  return (
    <Container className="text-center">
      <h2 className="pt-5 text-primary" id="sot">
        Is&nbsp;
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
        <div className="col-12" id="result-field"><Result username={username} active={statuses} resp={resp} /></div>
      </Row>
      <footer className="fixed-bottom mt-5 pt-0 m-4">
        <div className="text-start">
          <span className="text-muted">
            Copyright 2022
            <a class="btn btn-link pb-2 px-0" href="https://twitter.com/L2" role="button">@L2</a>
            ,
            <a class="btn btn-link pb-2 px-0" href="https://twitter.com/250000" role="button">@250000</a>
            ,
            <a class="btn btn-link pb-2 px-0" href="https://twitter.com/suzuneu_discord" role="button">@suzuneu_discord</a>
          </span>
        </div>
      </footer>
    </Container>
  )
}