"use client"

import { BackBtn } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatValue } from "@/utils/format-price";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const CartListContainer = styled.div`
    margin-top: 24px;

    h3{
        font-size: 24px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--text-dark-selected)
    }
    p{
        font-size: 16px;
        font-weight: 300;
        line-height: 150%;
        color: var(--text-dark)
    }
    span{
        font-weight: 600
        }
`;

const CartList = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    margin-top: 24px;
`;

export default function CartPage() {
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const calculateTotal = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => sum += item.price_in_cents * item.quantity, 0)
    }

    const cardTotal = formatValue(calculateTotal(value));

    const handUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if (item.id !== id) return item
            return { ...item, quantity: quantity }
        })
        updateLocalStorage(newValue)
    }

    const handleDeleteItem = (id: string) => {
        const newValue = value.filter(item => {
            if (item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }

    return (
        <DefaultPageLayout>
            <Container>
                <BackBtn navigate="/" />
                <CartListContainer >
                    <h3>Seu Carrinho</h3>
                    <p>Total {value.length} Produtos <span>{cardTotal}</span>
                    </p>
                    <CartList>
                        {value.map((item => <CartItem product={item} key={item.id} handUpdateQuantity={handUpdateQuantity} handleDelete={handleDeleteItem} />))}
                    </CartList>
                </CartListContainer >
            </Container>
        </DefaultPageLayout>
    )
}