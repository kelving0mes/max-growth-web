"use client"

import DropdownActions from "@/components/DropdownActions";
import { Icon } from "@/components/Icon";
import { destroy } from "../actions/produtos/destroy";
import toast from "react-hot-toast";

interface Produto {
    id: number
    nome: string
    icone: string
}

export function ProdutoItem(produto: Produto) {
    
    function handleDelete() {
        toast.promise(
            destroy(produto.id),
            {
                loading: "apagando produto...",
                success: "produto apagado",
                error: (error) => { 
                    return error.message
                }
            }
        )
    }

    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <Icon name={produto.icone} />
                <span>{produto.nome}</span>
            </div>
            <button onClick={handleDelete}>Apagar</button>
            <DropdownActions 
                onEdit={() => { console.log("editar ainda não implementado")}}
                onDelete={handleDelete}
            />
        </div>
    )
}