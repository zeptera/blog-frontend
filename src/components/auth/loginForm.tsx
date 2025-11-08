import { Label } from "@radix-ui/react-label";
import CardWrapper from "./cardWrapper";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRef, type FormEvent } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, githubAuthProvider, googleProvider } from "@/config/firebase";

const LoginForm = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
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
  const footerContent = (
    <>
      <Button
        form="signin-form"
        type="submit"
        onSubmit={handleSubmit}
        className="w-full"
      >
        Login
      </Button>
      <div className="w-full flex items-center justify-between flex-row">
        <div className="bg-gray-300 h-[1px] w-1/4"></div>
        <p>Or continue with</p>
        <div className="bg-gray-300 h-[1px] w-1/4"></div>
      </div>

      <div className="gap-2 flex justify-between w-full">
        <Button
          variant="outline"
          className="flex items-center justify-center flex-1 gap-2"
          onClick={signInWithGoogle}
        >
          <FcGoogle className="w-4 h-4" />
          Google
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-center flex-1"
          onClick={signInWithGithub}
        >
          <FaGithub className="w-4 h-4" />
          Github
        </Button>
      </div>
    </>
  );
  return (
    <CardWrapper
      cardTitle="Login to your account"
      cardDescription="Enter your email below to login to your account"
      backText="Signup"
      backLink="/auth/signup"
      footerContent={footerContent}
    >
      <form id="signin-form" ref={formRef}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                to="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              placeholder="********"
              type="password"
              required
            />
          </div>
        </div>
      </form>
    </CardWrapper>
  );
};

export default LoginForm;
