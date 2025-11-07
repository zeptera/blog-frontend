import { Label } from "@radix-ui/react-label";
import CardWrapper from "./cardWrapper";
import { Input } from "../ui/input";

const LoginForm = () => {
  return (
    <CardWrapper
      cardTitle="Login to your account"
      cardDescription="Enter your email below to login to your account"
      backText="Signup"
      backLink="/auth/signup"
    >
      <form>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
        </div>
      </form>
    </CardWrapper>
  );
};

export default LoginForm;
