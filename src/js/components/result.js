import React from "react";
import { Accordion } from "react-bootstrap";
import Icons from "./icons";
import ResultAccordion from "./result-accordion";

export default function Result({ username = "", active }) {
  return (
    <Accordion className="accordion-flush" id="accordion-parent">
      <div id="result-user">
        <div className="d-flex" id="user-status">
          <span className="me-3" id="user_"><Icons active={active} question="user" /></span>
        </div>
        <div className="text-wrap" id="response"></div>
      </div>
      <hr className="m-0" />
      <ResultAccordion content="Search Suggestion Ban" count="One" description="検索窓にIDを入力した際に検索候補にアカウントが表示されなくなります。" />
    </Accordion>
  )
}