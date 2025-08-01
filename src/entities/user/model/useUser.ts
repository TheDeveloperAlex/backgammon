"use client";

import { useSession } from "next-auth/react";

export function useUser() {
  const { data: session, status } = useSession();

  return {
    user: session?.user || null,
    isAuth: status === "authenticated",
    isLoading: status === "loading",
  };
}
