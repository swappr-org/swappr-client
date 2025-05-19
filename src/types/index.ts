export type Option = {
  label: string;
  value: string;
};

export type Dependency = {
  id: string;
  value: string;
};

export type Question = {
  id: string;
  label: string;
  slug: string;
  type: "text" | "radio" | "select" | "multi-select" | "range";
  required?: boolean;
  options?: Option[];
  dependsOn?: Dependency;
  note?: string;
};

export type QuestionsType = {
  questions: Question[];
};
