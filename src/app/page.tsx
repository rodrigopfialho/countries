import { Countries } from "@/components/Countries";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full h-full bg-dark-lightBackground">
      <Header />
      <main className=" w-full my-12 px-20">
      
        <section className="flex flex-1 flex-col gap-4 mt-7 flex-wrap justify-between">
          <Countries />
        </section>
      </main>
    </div>
  )
}
