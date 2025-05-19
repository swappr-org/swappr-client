import React from "react";
import QuestionLabel from "./label";
import { useFormStore } from "@/store/form-store";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Radio() {
  const { currentQuestion } = useFormStore();
  return (
    <div>
      <QuestionLabel>{currentQuestion?.label}</QuestionLabel>

      <p className="font-inter mt-4 text-center text-sm text-slate-400">
        {currentQuestion?.note}
      </p>

      <ToggleGroup
        type="single"
        variant="outline"
        size="custom"
        className="mt-10 grid w-full shrink-0 grid-cols-1 gap-[20px] min-[460px]:grid-cols-2"
      >
        {currentQuestion?.options?.map((option) => (
          <ToggleGroupItem
            value={option.value}
            key={option.label}
            className={`active-state w-full rounded-[20px] ${
              option.label.length > 20 ? "sm:col-span-2" : ""
            }`}
          >
            <span className="text-medium font-semibold break-words">
              {option.label}
            </span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
