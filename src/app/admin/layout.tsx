export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="
      px-[10vw]
      py-[2vw]"
    >
      {children}
    </main>
  );
}
