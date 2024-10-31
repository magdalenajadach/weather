import Header from "@/components/Header/Header";
import Location from "@/components/Location/Location";
import Search from "@/components/Search/Search";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start">
      <Header />
      <Search />
      <Location />
      <Footer />
    </main>
  );
}
