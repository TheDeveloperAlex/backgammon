import { getHeaderData } from "../model/getHeaderData";
import { Button } from "@/components/ui/button";

export default async function Header() {
  const { navLinks, isAuth, user } = await getHeaderData();

  return (
    <header className="py-4 px-6 border-b flex justify-between items-center">
      <div className="text-lg font-semibold">🎲 НардоГейм</div>

      <nav className="flex gap-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm hover:underline"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {isAuth ? (
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{user?.email}</span>
          <Button variant="ghost">Выйти</Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <a href="/signin">Войти</a>
          </Button>
          <Button asChild>
            <a href="/signup">Регистрация</a>
          </Button>
        </div>
      )}
    </header>
  );
}
