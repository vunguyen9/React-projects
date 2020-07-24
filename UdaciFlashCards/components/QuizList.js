import React from "react"
import QuizBox from "./QuizBox"

export default function QuizList({ questions, index, total }) {
  const questionObject = questions[index]

  const { question, answer } = questionObject

  return (
    <QuizBox
      answer={answer}
      question={question}
      index={index + 1}
      total={total}
    />
  )
}
