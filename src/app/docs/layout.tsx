interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container py-8">
      <div className="space-y-8">{children}</div>
    </div>
  );
}
