"use client"
import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-type";
import styled from "styled-components";

interface FilterItemProps {
    selected: boolean;
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    list-style: none;
    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        gap: 40px;
    }
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    color: ${props => props.selected ? 'var(--text-dark-selected)' : 'var(--text-dark)'};
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 16px;
        line-height: 22px;
    }
`

export function FilterByType() {
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value);
    }
    return (
        <FilterList>
            <FilterItem selected={type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>Todos os Produtos</FilterItem>
            <FilterItem selected={type === FilterType.SHIRT} onClick={() => handleChangeType(FilterType.SHIRT)}>Camisetas</FilterItem>
            <FilterItem selected={type === FilterType.MUG} onClick={() => handleChangeType(FilterType.MUG)}>Canecas</FilterItem>
        </FilterList>
    )
}