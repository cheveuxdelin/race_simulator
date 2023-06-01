interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({ text, type = "submit" }: ButtonProps) {
  return (
    <button
      type={type}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 block mx-auto relative bottom-0"
    >
      {text}
    </button>
  );
}
