interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({ text, type = "submit" }: ButtonProps) {
  return (
    <button
      type={type}
      className="flex w-full mt-8 justify-center rounded-md bg-[#ee0100] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ee0100] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ee0100]"
    >
      {text}
    </button>
  );
}
