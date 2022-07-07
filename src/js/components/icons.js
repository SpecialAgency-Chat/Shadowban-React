import React from "react";

export default function Icons({ active, question = "question" }) {
  return (
    <>
      <i className={`fa-solid fa-circle-${question} text-secondary fa-xl my-2 ${active !== "secondary" ? "d-none":""}`} ></i>
      <div className={`spinner-border text-primary ${active !== "spinner" ? "d-none":""} mb-0`}></div>
      <i className={`fa-solid fa-circle-xmark text-danger fa-xl my-2 ${active !== "danger" ? "d-none":""}`} ></i>
      <i className={`fa-solid fa-circle-check text-success fa-xl my-2 ${active !== "success" ? "d-none":""}`} ></i>
    </>
  )
}