import { NavBar } from "@/components/NavBar"
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { get } from "@/app/actions/categorias/get";

export default async function Categorias() {
  const categorias = await get()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />
      <section className="flex flex-col gap-3 bg-[#7C9885] text-[#FFFCFF] p-6 mt-4 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Cadastrar Produto</h2>
          <Button color="primary" startContent={<Plus size={18}/>}>
            Novo Produto
          </Button>
        </div>
        {categorias.map(categoria => <CategoriaItem {...categoria} /> )}

      </section>

    </main>
  );
}
