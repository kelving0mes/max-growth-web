"use client"
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";

export default function DropdownActions() {
  return (
    <Dropdown>
      <DropdownTrigger as="button">
        <ChevronDown/>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="edit" startContent={<Pencil size={16}/>}>EDITAR</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" startContent={<Trash size={16}/>}>
          APAGAR
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}