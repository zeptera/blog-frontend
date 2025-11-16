import { FaXmark } from "react-icons/fa6";

interface IAlert {
  message: string | undefined;
  clearMessage: () => void;
}
const Alert = ({ message, clearMessage }: IAlert) => {
  return (
    <div className="flex justify-between items-center w-full bg-destructive/50 p-3 mt-3 rounded-md">
      <p className="text-foreground">{message}</p>
      <FaXmark
        className="text-foreground cursor-pointer"
        onClick={() => clearMessage()}
      />
    </div>
  );
};

export default Alert;
