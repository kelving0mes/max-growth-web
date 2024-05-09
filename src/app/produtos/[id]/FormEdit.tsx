"use client"

import { update } from "@/app/actions/produtos/update"
import { icons } from "@/app/utils/icons"
import { SubmitButton } from "@/components/SubmitButton"
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react"
import Link from "next/link"
import { useFormState } from "react-dom"

export default function FormEdit(produto: Produto){
    const initialState = {
        messageNome: ""
    }

    const [state, formAction] = useFormState(update, initialState)

    return (
            <form action={formAction} className="flex flex-col gap-3 bg-[#7C9885] text-[#FFFCFF]min-w-[500px] p-6 mt-4 rounded">
                <h2 className="text-2xl font-bold">Editar Produto {produto.id}</h2>
                <input type="hidden" name="id" value={produto.id} />
                <Input
                    key="nome"
                    label="Nome"
                    name="nome"
                    defaultValue={produto.nome}
                    variant="bordered"
                    color="secondary"
                    labelPlacement="outside"
                    isInvalid={state?.messageNome != ""}
                    errorMessage={state?.messageNome}
                />

                <Autocomplete
                    defaultInputValue={produto.icone}
                    label="Ícone"
                    name="icone"
                    placeholder="Procurar Ícone"
                    variant="bordered"
                    labelPlacement="outside"
                >
                    {icons.map((item) =>
                        <AutocompleteItem key={item.name} startContent={item.icon}>
                            {item.name}
                        </AutocompleteItem>
                    )}

                </Autocomplete>

                <div className="flex justify-around">
                    <Link href="/produtos">
                        <Button variant="bordered">Cancelar</Button>
                    </Link>

                    <SubmitButton />
                </div>

            </form> 
    )
}