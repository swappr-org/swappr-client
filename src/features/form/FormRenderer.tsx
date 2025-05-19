import React from "react";
import { Question } from "@/types";
import Radio from "@/components/form/radio";
import Select from "@/components/form/select";
import Range from "@/components/form/range";

interface FormRendererProps {
  question: Question;
  onAnswer: (value: string | string[]) => void;
}

export default function FormRenderer({
  question,
  onAnswer,
}: FormRendererProps) {
  switch (question.type) {
    case "select":
      return <Select onAnswer={onAnswer} />;
    case "radio":
      return <Radio onAnswer={onAnswer} />;
    case "range":
      return <Range />;
    default:
      return null;
  }
}
