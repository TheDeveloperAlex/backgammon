import { getServerUser } from "@/lib/getServerUser";

export async function getHeaderData() {
  const { user, isAuth } = await getServerUser();

  const navLinks = [
    { label: "Главная", href: "/" },
    ...(isAuth ? [{ label: "Дашборд", href: "/dashboard" }] : []),
    { label: "Поддержка", href: "/support" },
  ];

  return {
    user,
    isAuth,
    navLinks,
  };
}
