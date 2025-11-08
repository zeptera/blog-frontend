import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CardWrapper from "./cardWrapper";
import { Input } from "../ui/input";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider, githubAuthProvider } from "@/config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRef, type FormEvent } from "react";
import { useNavigate } from "react-router";

const SignupForm = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    createUserWithEmailAndPassword(auth, email, password)
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
      <Button type="submit" className="w-full" form="signup-form">
        Signup
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
      cardTitle="Create new account"
      cardDescription="Enter your email below to create your account"
      backText="Login"
      backLink="/auth/login"
      footerContent={footerContent}
    >
      <form id="signup-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
        </div>
      </form>
    </CardWrapper>
  );
};

export default SignupForm;
