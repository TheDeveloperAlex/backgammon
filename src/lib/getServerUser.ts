import { getServerSession } from "next-auth";
import { authOptions } from "@/shared/config/auth";

export async function getServerUser() {
  const session = await getServerSession(authOptions);

  return {
    user: session?.user || null,
    isAuth: !!session?.user,
  };
}
