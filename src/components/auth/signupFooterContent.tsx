import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

interface ISignupFooterProps {
  onGoogleSignIn: () => void;
  onGithubSignIn: () => void;
  isSubmitting: boolean;
}

const SignupFooterContent = ({
  onGithubSignIn,
  onGoogleSignIn,
  isSubmitting,
}: ISignupFooterProps) => {
  return (
    <>
      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full"
        form="signup-form"
      >
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
          onClick={onGoogleSignIn}
        >
          <FcGoogle className="w-4 h-4" />
          Google
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-center flex-1"
          onClick={onGithubSignIn}
        >
          <FaGithub className="w-4 h-4" />
          Github
        </Button>
      </div>
    </>
  );
};

export default SignupFooterContent;
