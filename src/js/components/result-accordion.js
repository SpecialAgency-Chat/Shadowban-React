import React from "react";
import { Accordion, AccordionButton } from "react-bootstrap";
import Icons from "./icons";

export default function ResultAccordion({ content = "", active = "secondary", count, description = "Unknown Description" }) {
  return (
    <Accordion.Item>
      <div className="accordion-header" id={`flush-heading${count}`}>
        <AccordionButton className="collapsed" as="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${count}`} aria-expanded="false" aria-controls={`flush-collapse${count}`}>
          <span className="me-3 results"><Icons active={active} /></span>
          {content}
        </AccordionButton>
      </div>
      <div id={`flush-collapse${count}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${count}`} data-bs-parent="#accordion-parent">
        <div className="accordion-body">{description}</div>
      </div>
    </Accordion.Item>
  )
}