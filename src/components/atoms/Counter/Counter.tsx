import ButtonAtom from "../Button/Button";

const Counter: React.FC<CounterProps> = ({ formdata, setFormdata }) => {
  const { done, score = 0, test = "0", counter = 0 } = formdata;

  return (
    <div
      className={`fixed flex flex-col size-fit justify-center items-center bg-white shadow-lg transition-all duration-1000 ease-in-out ${
        done ? "opacity-100" : "opacity-0"
      } ${
        Number(counter) === Number(test)
          ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg min-w-65 p-5 py-7 gap-7"
          : "left-6 top-6 rounded-full !w-fit p-0 gap-0"
      }`}
    >
      <div
        className={`relative rounded-full size-25 flex justify-center items-center overflow-clip ${
          Number(counter) === Number(test) ? "scale-75" : "scale-100"
        }`}
      >
        <div className="z-20 text-gray-800">
          <p className="text-2xl font-semibold">
            {score}
            <span className="text-xs ml-0.5">/{test}</span>
          </p>
        </div>
        <div className="-rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-25 flex justify-start items-start">
          <div
            className="bg-gradient-to-br from-teal-500 to-violet-300 h-full"
            style={{ width: `${(Number(counter) / Number(test)) * 100}%` }}
          />
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center gap-2 overflow-clip duration-1000 ease-in-out ${
          Number(counter) === Number(test) && done
            ? "max-h-200 max-w-200"
            : "h-0 w-0"
        }`}
      >
        <h5 className="text-teal-500 font-semibold text-2xl">Success</h5>
        <p className="-mb-2 text-gray-900 font-normal text-base">
          Congratulations
        </p>
        <p className="text-gray-500 text-sm mb-4">You are on the right track</p>
        <ButtonAtom
          text="Reset"
          onClick={() =>
            setFormdata({
              ...formdata,
              test: "",
              counter: 0,
              score: 0,
              done: false,
            })
          }
        />
      </div>
    </div>
  );
};

export default Counter;

type CounterProps = {
  formdata: {
    test: string;
    score: number;
    done: boolean;
    counter: number;
  };
  setFormdata: (value: React.SetStateAction<T>) => void;
};
