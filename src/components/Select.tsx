interface SelectProps {
  options: string[];
  label: string;
  placeholer?: string;
}

export default function Select({ options, label, placeholer }: SelectProps) {
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
        defaultValue={placeholer}
      >
        {placeholer && <option disabled hidden>{placeholer}</option>}
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
