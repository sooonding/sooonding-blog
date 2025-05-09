export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-[var(--header-height)] items-center">
        <a href="#" className="text-xl font-semibold">
          <span className="font-bold">sooonding 블로그</span>
        </a>
        <nav className="ml-auto flex items-center gap-4">
          <a href="#" className="hover:text-primary font-medium">
            홈
          </a>
          <a href="#" className="hover:text-primary font-medium">
            블로그
          </a>
          <a href="#" className="hover:text-primary font-medium">
            소개
          </a>
        </nav>
      </div>
    </header>
  );
}
