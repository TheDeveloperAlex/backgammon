export default function Footer() {
  return (
    <footer className="w-full border-t mt-auto py-4 text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 px-4">
        <span>© {new Date().getFullYear()} НардоГейм</span>
        <div className="flex gap-4">
          <a href="/support" className="hover:underline">
            Поддержка
          </a>
          <a href="/terms" className="hover:underline">
            Условия
          </a>
        </div>
      </div>
    </footer>
  );
}
