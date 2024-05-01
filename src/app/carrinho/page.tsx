import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <NavBar active="carrinho"/>
      <h2 className="text-[#FFFCFF] place-self-center">Carrinho</h2>
    </main>
  );
}
