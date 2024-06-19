"use client"

import { useProducts } from "@/hooks/useProducts";

interface ProductListProps {

}
export function ProductList(props: ProductListProps) {
    const { data } = useProducts();
    console.log(data);
    return (
        <></>
    )
}