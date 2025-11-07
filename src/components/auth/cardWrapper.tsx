import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import logo from "../../assets/zeptera.svg";

interface ICardWrapper {
  cardTitle: string;
  cardDescription: string;
  children: ReactNode;
  backText: string;
  backLink: string;
}
export function CardWrapper({
  cardDescription,
  cardTitle,
  children,
  backText,
  backLink,
}: ICardWrapper) {
  return (
    <Card className="w-full min-w-sm bg-secondary">
      <CardHeader>
        <CardTitle className="flex gap-2 justify-start items-center ">
          <div className="flex w-1/12">
            <img src={logo} alt="logo" />
          </div>
          {cardTitle}
        </CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
        <CardAction>
          <Button variant="link">
            <Link to={backLink}>{backText}</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
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
            className="flex items-center justify-center flex-1"
          >
            <FcGoogle />
            Google
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center flex-1"
          >
            <FaGithub />
            Github
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;
