"use client"

import { useProducts } from "@/hooks/useProducts";
import styled from "styled-components";
import { ProductCard } from "./product-card";

const ListContaineir = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
`


export function ProductList() {
    const { data } = useProducts();
    return (
        <ListContaineir>
            {data?.map(product =>
                <ProductCard
                    key={product.id}
                    title={product.name}
                    price={product.price_in_cents}
                    image={product.image_url}
                    id={product.id}
                />
            )}
        </ListContaineir>
    )
}