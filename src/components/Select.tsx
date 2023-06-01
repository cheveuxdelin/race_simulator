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
        className="mt-2 mb-4 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
