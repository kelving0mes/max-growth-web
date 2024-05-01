import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import Image from "next/image";

interface NavBarProps {
  active: "dashboard" | "categorias" | "carrinho";
}

export function NavBar(props: NavBarProps) {
  const active = props.active
  const classActive = "border-b-3 border-[#FE654F] pb-1 font-bold"
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#7C9885] text-[#FFFCFF] w-full">
      <div className="flex gap-3">
        <Image src="/ginastica.png" alt="logo" width={50} height={50} />
        <h1 className="text-l font-bold">Maximum <br/> Growth</h1>
      </div>
      <ul className="flex gap-6">
        <li className={active == "dashboard" ? classActive : ""}>
          <Link href="/">Página Inicial</Link>
        </li>
        <li className={active == "categorias" ? classActive : ""}>
          <Link href="/categorias">Categorias</Link>
        </li>
        <li className={active == "carrinho" ? classActive : ""}>
          <Link href="/carrinho">Carrinho</Link>
        </li>
      </ul>
      <div>
        <Popover showArrow placement="bottom-end">
          <PopoverTrigger>
            <Image src="/shopping-cart.svg" alt="ícone carrinho" width={30} height={30} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <p>Seu carrinho está vazio</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  )
};