import { PrivateSidebar } from "../components/Private/PrivateSidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrivateSidebar />

      <main
        className="
        ml-[unset]
        sm:ml-[unset]
        md:ml-[300px]
        lg:ml-[300px]
        xl:ml-[300px]
        2xl:ml-[300px]"
      >
        {children}
      </main>
    </>
  );
}
