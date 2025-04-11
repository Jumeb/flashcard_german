import React, { SetStateAction } from "react";

import Input from "@/components/atoms/Inputs/Input.component";
import { isNumbersOnly } from "@/utils/libs/validator";
import SwitchInput from "@/components/atoms/Inputs/Switch.component";
import ButtonAtom from "@/components/atoms/Button/Button";

const SettingsFormMolecule: React.FC<FormProps> = ({
  formdata,
  clearValue,
  handleChange,
  handleCheck,
  setFormdata,
}) => {
  const { choice, test, level, done, description } = formdata;

  const handleDone = () => {
    setFormdata({
      ...formdata,
      done: true,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleDone();
    }
  };

  return (
    <div
      onKeyDown={(e) => handleKeyDown(e)}
      className={`fixed md:max-w-screen-sm w-full mt-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 flex flex-col items-center justify-start gap-8 bg-white shadow-2xl duration-500 ease-out rounded-lg ${
        done ? "invisible opacity-0 scale-0" : "opacity-100 visible scale-100"
      }`}
    >
      <div className="flex w-full flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full">
          <Input
            type={"number"}
            label={"Total test"}
            name={"test"}
            value={test}
            clearValue={clearValue}
            onChange={handleChange}
            validity={isNumbersOnly(test)}
            error={!isNumbersOnly(test)}
            errorText={"Please enter but number onlu"}
            placeholder={"Enter the amount of test"}
          />
          <Input
            type={"text"}
            placeholder="Enter your level: 'beginner' | 'advance'"
            label={"Level"}
            name={"level"}
            value={level}
            clearValue={clearValue}
            onChange={handleChange}
            validity={level.length > 2}
            error={level.length < 2}
            errorText={"Enter 'beginner' or 'advance' "}
          />
          <div className="w-full flex flex-row gap-4 justify-center items-center">
            {/* <SwitchInput
              value={choice}
              onChange={handleCheck}
              label="English translate"
              labelDe="German translate"
              name="choice"
            /> */}
            <SwitchInput
              value={description}
              onChange={handleCheck}
              labelDe="Show Description"
              label="Don't show Description"
              name="description"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <ButtonAtom text="Done" onClick={handleDone} />
      </div>
    </div>
  );
};

export default SettingsFormMolecule;

type FormProps = {
  formdata: {
    test: string;
    level: string;
    choice: boolean;
    done: boolean;
    description: boolean;
  };
  clearValue: (name: string) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormdata: (value: SetStateAction<FormProps["formdata"]>) => void;
};
