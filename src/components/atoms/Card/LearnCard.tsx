import { Language } from "@/utils/assets/contants";
import { SetStateAction } from "react";

const LearnCard: React.FC<LearnCardProps> = ({
  dictionary,
  choice = "de",
  formdata,
  setFormdata,
}) => {
  let backChoice: "en" | "de" = choice === "de" ? "en" : "de";
  const { done, test, counter, description } = formdata;
  return (
    <div
      onMouseEnter={() => setFormdata({ ...formdata, adder: 0 })}
      className={`relative perspective-distant h-60 w-135 group cursor-pointer duration-500 ease-in ${
        !done || Number(counter) === Number(test)
          ? "invisible opacity-0 scale-0"
          : "opacity-100 visible scale-100"
      }`}
    >
      <div className="absolute top-0 backface-hidden h-60 w-135 p-5 flex flex-col justify-start items-start gap-2 overflow-clip rounded-md shadow-lg bg-white duration-500 ease-in group-hover:rotate-x-180">
        <h1 className="text-pretty text-xl lg:text-3xl xl:text-4xl font-bold text-gray-800 w-full ">
          {dictionary?.[choice]}
        </h1>
        <div className="flex flex-col gap-2 justify-start items-start">
          {description && <p>{dictionary?.description}</p>}
          <p className="italic pt-4 font-xs lg:font-sm">
            <span className="font-bold">
              {choice === "de" ? "Beispiel" : "Example"}:{" "}
            </span>
            {choice === "de" ? dictionary?.example_de : dictionary?.example}
          </p>
        </div>
        <span className="absolute -bottom-2 -left-4 text-7xl text-transparent bg-gradient-to-br font-bold from-teal-400/30 to-purple-300/30 bg-clip-text">
          {choice === "de" ? "Deutsch" : "English"}
        </span>
        <span className="absolute -bottom-6 -right-4 text-9xl opacity-10">
          {choice === "de" ? "🇩🇪" : "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}
        </span>
      </div>
      <div className="abosulte top-0 backface-hidden h-60 w-135 p-5 flex flex-col justify-start items-start gap-2 overflow-clip rounded-md shadow-lg bg-teal-500 -rotate-x-180 duration-500 ease-in group-hover:rotate-x-0">
        <h1 className="text-pretty text-xl lg:text-3xl xl:text-4xl font-bold text-gray-100 w-full ">
          {dictionary?.[backChoice]}
        </h1>
        <div className="flex flex-col gap-2 justify-start items-start text-white">
          <p>{dictionary?.description}</p>
          <p className="italic pt-4 font-xs lg:font-sm">
            <span className="font-bold">
              {backChoice === "de" ? "Beispiel" : "Example"}:{" "}
            </span>
            {backChoice === "de" ? dictionary?.example_de : dictionary?.example}
          </p>
        </div>
        <span className="absolute -bottom-2 -left-4 text-7xl text-transparent bg-gradient-to-br font-bold from-white/30 to-gray-300/30 bg-clip-text">
          {backChoice === "de" ? "Deutsch" : "English"}
        </span>
        <span className="absolute -bottom-6 -right-4 text-9xl opacity-10">
          {backChoice === "de" ? "🇩🇪" : "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}
        </span>
      </div>
    </div>
  );
};

export default LearnCard;

type LearnCardProps = {
  dictionary: Language;
  formdata: {
    done: boolean;
    adder: number;
    test: string;
    counter: number;
    description: boolean;
  };
  choice?: "en" | "de";
  setFormdata: (value: SetStateAction<T>) => void;
};
