import DropdownActions from "@/components/DropdownActions";
import { Icon } from "@/components/Icon";

interface Produto {
    id: number
    nome: string
    icone: string
}

export function ProdutoItem(produto: Produto) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <Icon name={produto.icone} />
                <span>{produto.nome}</span>
            </div>
            <DropdownActions/>
        </div>
    )
}