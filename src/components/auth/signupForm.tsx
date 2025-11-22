import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { FirebaseError } from "firebase/app";
import { useForm, type SubmitHandler } from "react-hook-form";
import { auth, googleProvider, githubAuthProvider } from "@/config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { signupFormSchema, type signupFormType } from "@/schemas/signupForm";
import Alert from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import CardWrapper from "@/components/ui/cardWrapper";
import { Input } from "@/components/ui/input";
import SignupFormFooter from "./signupFormFooter.tsx";

const SignupForm = () => {
  const navigate = useNavigate();
  const {
    setError,
    register,
    handleSubmit,
    clearErrors,
    formState: { isSubmitting, errors },
  } = useForm<signupFormType>({ resolver: zodResolver(signupFormSchema) });

  const onSubmit: SubmitHandler<signupFormType> = async (
    data: signupFormType,
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate("/onboarding");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("email", { message: "Email already in use" });
            break;
          case "auth/internal-error":
            setError("root", { message: "Internal server Error" });
            break;
        }
      }
    }
  };

  const signInWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };
  const signInWithGithub = async () => {
    signInWithPopup(auth, githubAuthProvider)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <CardWrapper
      cardTitle="Create new account"
      cardDescription="Enter your email below to create your account"
      backText="Login"
      backLink="/auth/login"
      footerContent={
        <SignupFormFooter
          onGithubSignIn={signInWithGithub}
          onGoogleSignIn={signInWithGoogle}
          isSubmitting={isSubmitting}
        />
      }
    >
      <form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label
              htmlFor="email"
              className={errors.email && "text-destructive"}
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
              className={errors.email && "text-red-600 border-1 border-red-600"}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="password"
              className={errors.password && "text-destructive"}
            >
              Password
            </Label>
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="********"
              className={
                errors.password && "text-red-600 border-1 border-red-600"
              }
            />
            {errors.password && (
              <span className="text-red-600 text-xs">
                {errors.password.message}
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

export default SignupForm;
