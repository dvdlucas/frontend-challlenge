import styled from "styled-components"
import { ArrowIcon } from "../icons/arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-types"


const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400px;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 24px;
        svg {
            margin-left: 16px;
        }
    }
`

const Priorityfilter = styled.ul`
    position: absolute;
    width: 250px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
    border-radius: 4px;
    padding: 12px 16px;
    list-style: none;
    z-index: 999;
    top: 100%;
    right: 8px;
    li {
        color: var(--text-dark);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;;
    }
`

export function FilterByPriority() {
    const [isOpen, setIsOpen] = useState(false)
    const { setPriority } = useFilter()
    const handleOpen = () => setIsOpen(prev => !prev)

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(false)
    }
    return (
        <FilterContainer>
            <button onClick={handleOpen}>Organizar por
                <ArrowIcon />
            </button>
            {isOpen &&
                <Priorityfilter>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - Menor</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - Maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </Priorityfilter>
            }
        </FilterContainer>
    )
}