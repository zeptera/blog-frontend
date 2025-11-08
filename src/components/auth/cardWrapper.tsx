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
import { Link } from "react-router";
import logo from "../../assets/zeptera.svg";

interface ICardWrapper {
  cardTitle: string;
  cardDescription: string;
  children: ReactNode;
  backText: string;
  backLink: string;
  footerContent?: ReactNode;
}
export function CardWrapper({
  cardDescription,
  cardTitle,
  children,
  backText,
  backLink,
  footerContent,
}: ICardWrapper) {
  return (
    <Card className="w-full min-w-sm bg-secondary">
      <CardHeader>
        <CardTitle className="flex gap-2 justify-start items-center ">
          <img src={logo} alt="logo" className="w-1/12" />
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
      {footerContent && (
        <CardFooter className="flex-col gap-2">{footerContent}</CardFooter>
      )}
    </Card>
  );
}

export default CardWrapper;
