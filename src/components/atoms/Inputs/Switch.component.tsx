import { useLocalStorage } from "@/utils/hooks/useLocalStorage";

const SwitchInput: React.FC<SwitchInputProps> = ({
  label,
  name,
  onChange,
  value,
  labelDe,
}) => {
  const [, storeEasyLanguage] = useLocalStorage(name, value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    storeEasyLanguage(e.target.checked);
    onChange(e);
  };
  return (
    <>
      <input
        hidden
        type="checkbox"
        name={name}
        className="peer hidden"
        id={name}
        checked={value}
        onChange={handleChange}
      />
      <label
        htmlFor={name}
        className="group text-gray-800 text-sm font-light flex flex-row gap-2 justify-between items-center cursor-pointer"
      >
        <span className="label-text">{value ? labelDe : label}</span>
        <div className="border duration-200 ease-in border-gray-800 group-hover:outline-1 outline-gray-800 w-10 rounded-xl group-peer-checked:bg-white/50">
          <div className="size-5 bg-gray-700 rounded-full duration-200 ease-in-out group-peer-checked:translate-x-full" />
        </div>
      </label>
    </>
  );
};

export default SwitchInput;

type SwitchInputProps = {
  label: string;
  labelDe: string;
  name: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, max?: number) => void;
};
