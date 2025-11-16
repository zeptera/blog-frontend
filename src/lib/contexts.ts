import type { Auth, User } from "firebase/auth";
import { createContext } from "react";

interface AuthContextType {
  currentUser: User | null;
  authInstance: Auth;
}
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
