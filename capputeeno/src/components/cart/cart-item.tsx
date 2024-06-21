import { ProductInCart } from "@/types/product"
import { formatValue } from "@/utils/format-price";
import { ChangeEvent } from "react";
import styled from "styled-components"
import { DeleteIcon } from "../icons/delete-icon";

interface CartItemProps {
    product: ProductInCart
    handUpdateQuantity(id: string, quantity: number): void
    handleDelete(id: string): void
}

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 210px;
    border-radius: 8px;
    background-color: white;
    position: relative;


    button{
        position: absolute;
        top: 16px;
        right: 24px;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }


    img{
        max-height: 100%;
        width: 256px;
        border-radius: 8px 0 0 8px;
    }

    > div{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        padding: 16px 24px;
        line-height: 150%;
        color: var(--text-dark-selected);

        h4{
            font-size: 20px;
            font-weight: 500;
        }

        p{
            font-size: 12px;
            font-weight: 400;
        }

        div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;

            span{
                font-weight: 600;
                font-size: 16px;
                text-align: right;
                color: var(--shapes-dark);
            }
        }
    }
`

const SelectQuantity = styled.select`
        padding: 8px;
        border-radius: 8px;
        border: 1.5px solid var(--border-color);
        background-color: var(--bg-secondary);
        color: var(--text-dark);
        font-size: 16px;
        font-weight: 400;
`

export function CartItem({ product, handUpdateQuantity, handleDelete }: CartItemProps) {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handUpdateQuantity(product.id, Number(e.target.value))
    }

    return (
        <Item>
            <button onClick={() => handleDelete(product.id)} aria-label="Deletar item">
                <DeleteIcon />
            </button>

            <img src={product.image_url} alt="imagem do produto" />
            <div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div>
                    <SelectQuantity value={product.quantity} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </SelectQuantity>
                    <span>{formatValue(product.price_in_cents)}</span>
                </div>
            </div>
        </Item>
    )
}