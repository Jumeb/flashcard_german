"use client";
import React from "react";

import { useForm } from "@/utils/hooks/useForm";
import Banner from "@/components/molecule/Banner/Banner.molecule";
import FormMolecule from "@/components/molecule/Form/Form.molecule";

export default function HomeOrganism() {
  const { formdata, clearValue, handleChange, updateImage } = useForm({
    name: "Mafany Tande",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [],
    background: "#FFFFFF",
    color: "#000000",
  });

  const { name, description, images } = formdata;
  console.log(name, description, images);

  return (
    <div className="h-dvh flex flex-col items-center justify-start p-4 lg:px-8 xl:px-16">
      <Banner formdata={formdata} />
      <FormMolecule
        formdata={formdata}
        clearValue={clearValue}
        handleChange={handleChange}
        updateImage={updateImage}
      />
    </div>
  );
}
