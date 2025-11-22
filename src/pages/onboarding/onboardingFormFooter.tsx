import { Button } from "@/components/ui/button";

interface ILoginFooterProps {
  isSubmitting: boolean;
}
const OnboardingFormFooter = ({ isSubmitting }: ILoginFooterProps) => {
  return (
    <>
      <Button
        disabled={isSubmitting}
        form="onboarding-form"
        type="submit"
        className="w-full"
      >
        Submit
      </Button>
    </>
  );
};

export default OnboardingFormFooter;
