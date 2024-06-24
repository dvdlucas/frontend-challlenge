"use client"

import { BackBtn } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { Divider } from "@/components/divider";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatValue } from "@/utils/format-price";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        flex-direction: row;
    }
`;

const CartListContainer = styled.div`

    h3{
        font-size: 24px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 150%;
        color: var(--text-dark-selected);
        margin-top: 24px;
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

const CardResulContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: white;
    min-width: 352px;
    padding: 16px 24px;

    h3{
        font-size: 20px;
        font-weight: 600;
        color: var(--text-dark-selected);
        text-transform: uppercase;
        margin-bottom: 30px;
    }

`;

const TotalItem = styled.div<{ isBold: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-weight: ${props => props.isBold ? '600' : '400'};
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 12px;
`;

const ShoopBtn = styled.button`
    color: white;
    border-radius: 4px;
    background: var(--success-color);
    padding: 12px;
    width: 100%;
    border: none;
    margin-top: 40px;
    cursor: pointer;
`;

export default function CartPage() {
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const calculateTotal = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => sum += item.price_in_cents * item.quantity, 0)
    }

    const cardTotal = formatValue(calculateTotal(value));
    const deliveryFee = 4000;
    const cardTotalWithDelivery = formatValue(calculateTotal(value) + deliveryFee);

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
                <CartListContainer >
                    <BackBtn navigate="/" />
                    <h3>Seu Carrinho</h3>
                    <p>Total {value.length} Produtos <span>{cardTotal}</span>
                    </p>
                    <CartList>
                        {value.map((item => <CartItem product={item} key={item.id} handUpdateQuantity={handUpdateQuantity} handleDelete={handleDeleteItem} />))}
                    </CartList>
                </CartListContainer >
                <CardResulContainer>
                    <h3>Resumo do Pedido</h3>
                    <TotalItem isBold={false}>
                        <p>Subtotal de produtos</p>
                        <p>{cardTotal}</p>
                    </TotalItem>
                    <TotalItem isBold={false}>
                        <p>Entrega</p>
                        <p>{formatValue(4000)}</p>
                    </TotalItem>
                    <Divider />
                    <TotalItem isBold>
                        <p>Total do Pedido</p>
                        <p>{cardTotalWithDelivery}</p>
                    </TotalItem>
                    <ShoopBtn>Finalizar Compra</ShoopBtn>
                </CardResulContainer>
            </Container>
        </DefaultPageLayout>
    )
}