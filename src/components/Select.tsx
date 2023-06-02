interface SelectProps {
  options: string[];
  label: string;
}

export default function Select({ options, label }: SelectProps) {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-300"
      >
        {label}
      </label>
      <select
        id={label}
        name={label}
        className="mt-2 mb-4 block w-full bg-transparent border-transparent border-b-white py-1.5 pl-3 pr-10 text-white sm:text-sm sm:leading-6"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
