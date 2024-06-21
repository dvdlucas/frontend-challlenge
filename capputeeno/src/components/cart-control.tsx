import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import styled from "styled-components";

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

const Container = styled.div`
    position: relative;
`;

export function CartControl() {
    const { value } = useLocalStorage("cart-items", []);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        setItemCount(value.length);
    }, [value]);

    return (
        <Container>
            <CartIcon />
            {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
        </Container>
    );
}
