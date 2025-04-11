"use client";

import LearnCard from "@/components/atoms/Card/LearnCard";
import Counter from "@/components/atoms/Counter/Counter";
import QuestionFormMolecule from "@/components/molecule/Form/Question.molecule";
import SettingsFormMolecule from "@/components/molecule/Form/Settings.molecule";
import { germanEnglish, Language } from "@/utils/assets/contants";
import { useForm } from "@/utils/hooks/useForm";
import { getRandomItems } from "@/utils/libs/functions";
import { useEffect, useState } from "react";

const LearnOrganism = () => {
  const Language = germanEnglish;
  const {
    formdata,
    handleChange,
    handleCheck,
    clearValue,
    updateImage,
    setFormdata,
  } = useForm({
    //   choice: "de",
    title: "",
    example: "",
    counter: 0,
    score: 0,
    test: "",
    level: "beginner",
    choice: false,
    done: false,
    adder: 1,
    description: true,
  });
  const { counter = 0, test } = formdata;
  const [dictionary, setDictionary] = useState<Language[]>([]);
  useEffect(() => {
    if (Number(test) > 0) {
      setDictionary(getRandomItems(Language, Number(test)));
    }
  }, [test]);
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-screen">
      <LearnCard
        dictionary={dictionary[Number(counter)]}
        choice="de"
        formdata={formdata}
        setFormdata={setFormdata}
      />
      <QuestionFormMolecule
        formdata={formdata}
        clearValue={clearValue}
        handleChange={handleChange}
        setFormdata={setFormdata}
        language={dictionary[Number(counter)]}
      />
      <Counter formdata={formdata} setFormdata={setFormdata} />
      <SettingsFormMolecule
        formdata={formdata}
        clearValue={clearValue}
        handleChange={handleChange}
        handleCheck={handleCheck}
        setFormdata={setFormdata}
      />
    </div>
  );
};

export default LearnOrganism;
