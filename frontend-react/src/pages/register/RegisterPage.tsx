import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, registerSchema } from "./schema/register.schema";
import Input from "../../components/InputText";
import { useRegister } from "./hook/useRegister";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate } = useRegister();

  const handleOnSubmit = (data: RegisterSchema) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    mutate(user);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-2" onSubmit={handleSubmit(handleOnSubmit)}>
              <Input
                label="Name"
                hookForm={register("name")}
                error={errors.name}
                placeholder="John Doe"
              />
              <Input
                label="Your email"
                hookForm={register("email")}
                error={errors.email}
                placeholder="user@company.com"
              />
              <Input
                label="Password"
                hookForm={register("password")}
                error={errors.password}
                type="password"
                placeholder="••••••••"
              />
              <Input
                label="Confirm password"
                hookForm={register("confirmPassword")}
                error={errors.confirmPassword}
                type="password"
                placeholder="••••••••"
              />
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the
                    <a
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      href="#"
                    >
                      {" "}
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="!my-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
