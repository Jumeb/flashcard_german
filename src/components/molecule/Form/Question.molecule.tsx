import React, { SetStateAction } from "react";

import Input from "@/components/atoms/Inputs/Input.component";
import ButtonAtom from "@/components/atoms/Button/Button";
import { Language } from "@/utils/assets/contants";
import { MyForm } from "@/components/organism/Learn/Learn.organism";

const QuestionFormMolecule: React.FC<FormProps> = ({
  formdata,
  clearValue,
  handleChange,
  setFormdata,
  language,
}) => {
  const { title, example, done, counter, choice, score, adder, test } =
    formdata;
  // console.log(counter, test, Number(counter) === Number(test));
  const handleNext = () => {
    if (!choice && title.toLowerCase() === language?.en.toLowerCase()) {
      return setFormdata({
        ...formdata,
        score: score + adder,
        counter: counter + 1,
        adder: 1,
        title: "",
      });
    }
    if (choice && title.toLowerCase() === language?.de.toLowerCase()) {
      return setFormdata({
        ...formdata,
        score: score + adder,
        counter: counter + 1,
        adder: 1,
        title: "",
      });
    }
    if (
      title.toLowerCase() !== language?.de.toLowerCase() ||
      title.toLowerCase() !== language?.en.toLowerCase()
    ) {
      return setFormdata({
        ...formdata,
        counter: counter + 1,
        adder: 1,
        title: "",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div
      onKeyDown={(e) => handleKeyDown(e)}
      className={`md:max-w-screen-sm  w-full p-5 flex flex-col items-center justify-start gap-8 bg-white shadow-2xl duration-500 ease-in ${
        !done || Number(counter) === Number(test)
          ? "invisible opacity-0 scale-0"
          : "opacity-100 visible scale-100"
      }`}
    >
      <div className="flex w-full flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full">
          <Input
            type={"text"}
            label={"Title"}
            name={"title"}
            value={title}
            clearValue={clearValue}
            onChange={handleChange}
            validity={
              title.toLowerCase() === language?.en.toLowerCase() ||
              title.toLowerCase() === language?.de.toLowerCase()
            }
            error={title?.length === 0}
            errorText={"Please enter the correct translation"}
            placeholder={"Translate the title"}
          />
          <Input
            type={"text"}
            placeholder="Translate the description (optional)"
            label={"Description (optional)"}
            name={"example"}
            value={example}
            clearValue={clearValue}
            onChange={handleChange}
            validity={example.length > 2}
            error={example.length < 2}
            errorText={"You did not translate the example properly"}
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <ButtonAtom text="Next" onClick={handleNext} />
      </div>
    </div>
  );
};

export default QuestionFormMolecule;

type FormProps = {
  formdata: MyForm;
  clearValue: (name: string) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  setFormdata: (value: SetStateAction<FormProps["formdata"]>) => void;
  language: Language;
};
