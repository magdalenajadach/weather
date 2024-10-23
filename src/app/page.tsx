import Header from "@/components/Header/Header";
import Location from "@/components/Location/Location";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <Header />
      <div className="flex w-full items-center justify-center min-h-screen sm:p-20">
        <Location />
      </div>
    </main>
  );
}
