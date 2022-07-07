import React from "react";
import { Accordion } from "react-bootstrap";
import Icons from "./icons";

export default function ResultAccordion({ content = "", active = "secondary", count, description = "Unknown Description" }) {
  return (
    <Accordion.Item>
      <Accordion.Header class={`flush-heading${count}`}>
        <Accordion.Button className="collapsed" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${count}`} aria-expanded="false" aria-controls={`flush-collapse${count}`}>
          <span className="mb-3 results"><Icons active={active} /></span>
          {content}
        </Accordion.Button>
      </Accordion.Header>
      <div id={`flush-collapse${count}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${count}`} data-bs-parent="#accordion-parent">
        <div class="accordion-body">{description}</div>
      </div>
    </Accordion.Item>
  )
}