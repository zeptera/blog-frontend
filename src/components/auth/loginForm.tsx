import { useForm, type SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { auth, githubAuthProvider, googleProvider } from "@/config/firebase";
import { loginFormSchema, type loginFormType } from "@/schemas/loginForm";
import LoginFormFooter from "./loginFormFooter.tsx";
import Alert from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import CardWrapper from "@/components/ui/cardWrapper";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<loginFormType>({ resolver: zodResolver(loginFormSchema) });

  const onSubmit: SubmitHandler<loginFormType> = async (
    data: loginFormType,
  ) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
            setError("root", { message: "Invalid credentials" });
            break;
        }
      }
    }
  };

  const signInWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then(() => console.log(auth))
      .catch((error) => console.error(error));
  };
  const signInWithGithub = async () => {
    signInWithPopup(auth, githubAuthProvider)
      .then(() => console.log(auth))
      .catch((error) => console.error(error));
  };
  return (
    <CardWrapper
      cardTitle="Login to your account"
      cardDescription="Enter your email below to login to your account"
      backText="Signup"
      backLink="/auth/signup"
      footerContent={
        <LoginFormFooter
          onGithubSignIn={signInWithGithub}
          onGoogleSignIn={signInWithGoogle}
          isSubmitting={isSubmitting}
        />
      }
    >
      <form id="signin-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label
              htmlFor="email"
              className={errors.email && "text-destructive"}
            >
              Email
            </Label>
            <Input
              {...register("email")}
              id="email"
              placeholder="johndoe@example.com"
              className={`${errors.email && " text-red-600 border border-red-600 "}`}
            />
            {errors.email && (
              <span className="text-xs text-red-600">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label
                htmlFor="password"
                className={errors.password && "text-destructive"}
              >
                Password
              </Label>
              <Link
                to="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              {...register("password")}
              id="password"
              placeholder="********"
              type="password"
              className={`${errors.password && " text-red-600 border-1 border-red-600 "}`}
            />
            {errors.password && (
              <span className="text-red-600 text-xs">
                {errors.password?.message}
              </span>
            )}
          </div>
        </div>
        {errors.root && (
          <Alert
            message={errors.root.message}
            clearMessage={() => clearErrors("root")}
          />
        )}
      </form>
    </CardWrapper>
  );
};

export default LoginForm;
