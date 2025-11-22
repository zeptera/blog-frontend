import { Navigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import CardWrapper from "@/components/ui/cardWrapper";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import Alert from "@/components/ui/alert";
import {
  onboardingFormSchema,
  type onboardingFormType,
} from "@/schemas/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import OnboardingFormFooter from "./onboardingFormFooter";

const Onboarding = () => {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to={"/auth/login"} replace />;
  const {
    handleSubmit,
    clearErrors,
    register,
    formState: { errors, isSubmitting },
  } = useForm<onboardingFormType>({
    resolver: zodResolver(onboardingFormSchema),
  });

  const onSubmit: SubmitHandler<onboardingFormType> = async (
    data: onboardingFormType,
  ) => {
    try {
      const tokenId = await currentUser.getIdToken();
      const result = await fetch(
        `http://localhost:3000/api/v1/users/check-username?username=${data.username}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${tokenId}`,
          },
        },
      );
      console.log(await result.json());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col ">
        <CardWrapper
          cardTitle="Complete your Zeptera Account"
          cardDescription="Enter your name and username below to finish your account"
          footerContent={<OnboardingFormFooter isSubmitting={isSubmitting} />}
        >
          <form id="onboarding-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {!currentUser.displayName && (
                <div className="grid gap-2">
                  <Label
                    htmlFor="name"
                    className={errors.name && "text-destructive"}
                  >
                    Name
                  </Label>
                  <Input
                    {...register("name")}
                    id="name"
                    placeholder="john doe"
                    className={`${errors.name && " text-red-600 border border-red-600 "}`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-600">
                      {errors.name?.message}
                    </span>
                  )}
                </div>
              )}
              <div className="grid gap-2">
                <Label
                  htmlFor="username"
                  className={errors.username && "text-destructive"}
                >
                  Username
                </Label>
                <Input
                  {...register("username")}
                  id="username"
                  placeholder="johndoe"
                  className={`${errors.username && " text-red-600 border border-red-600 "}`}
                />
                {errors.username && (
                  <span className="text-xs text-red-600">
                    {errors.username?.message}
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
      </div>
    </div>
  );
};

export default Onboarding;
