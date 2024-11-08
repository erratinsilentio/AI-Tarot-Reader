export default function MainLayout({ children }) {
  return (
    <div className="grid grid-rows-[1px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-center">
        {children}
      </main>
    </div>
  );
}
