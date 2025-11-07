import { Label } from "@radix-ui/react-label";
import CardWrapper from "./cardWrapper";
import { Input } from "../ui/input";

const SignupForm = () => {
  return (
    <CardWrapper
      cardTitle="Create new account"
      cardDescription="Enter your email below to create your account"
      backText="Login"
      backLink="/auth/login"
    >
      <form>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="john doe" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="johndoe" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </div>
      </form>
    </CardWrapper>
  );
};

export default SignupForm;
