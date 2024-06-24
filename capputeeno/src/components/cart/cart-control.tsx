import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../icons/cart-icon";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0px 5px;
    font-size: 10px;
    background-color: var(--delete-color);
    color: white;
    margin-left: -10px;
`;

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`;

export function CartControl() {
    const router = useRouter();
    const { value } = useLocalStorage("cart-items", []);
    const [itemCount, setItemCount] = useState(0);

    const handleNavigateToCart = () => {
        router.push("/cart")
    }
    useEffect(() => {
        setItemCount(value.length);
    }, [value]);

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon />
            {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
        </Container>
    );
}
