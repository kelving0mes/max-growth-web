import { NavBar } from "@/components/NavBar"
import { ProdutoItem } from "./ProdutoItem";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { get } from "@/app/actions/produtos/get";
import Link from "next/link";

export default async function Produtos() {
  const produtos: Array<Produto> = await get()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="produtos" />
      <section className="flex flex-col gap-3 bg-[#7C9885] text-[#FFFCFF] p-6 mt-4 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Cadastrar Produto</h2>
          <Link href="/produtos/new">
            <Button color="primary" startContent={<Plus size={18} />}>
              Novo Produto
            </Button>
          </Link>
        </div>
        {produtos.map(produtos => <ProdutoItem {...produtos} /> )}

      </section>

    </main>
  );
}
