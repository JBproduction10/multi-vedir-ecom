import ThemeToggle from "@/components/shared/theme-toggled";

export default function Home() {
  return (
    <div className="h-full w-full lg:flex text-white px-4 lg:px-12">
      <ThemeToggle />
      Welcome
    </div>
  );
}
