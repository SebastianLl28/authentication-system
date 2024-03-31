import { useId } from "react";
import { cn } from "../helpers/cn";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hookForm: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
}

const Input = ({
  className,
  type = "text",
  label,
  hookForm,
  error,
  ...args
}: ITextInput) => {
  const id = useId();

  return (
    <div className="relative w-full pb-4">
      {label ? (
        <label
          htmlFor={id}
          className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
            error ? "text-red-600" : ""
          }`}
        >
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        className={cn(
          "border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:text-white",
          className,
          error
            ? "bg-red-50 border-red-500 focus:outline-red-600 focus-visible:outline-red-600"
            : "bg-gray-50 border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500"
        )}
        {...hookForm}
        {...args}
      />
      {error ? (
        <span className="absolute -bottom-px left-0 text-xs text-red-500">
          {error.message}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
