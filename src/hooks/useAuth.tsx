import { AuthContext } from "@/lib/contexts";
import { useContext } from "react";

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an <AuthProvider>");
  }
  return context;
}
