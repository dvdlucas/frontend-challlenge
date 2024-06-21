"use client"
import styled from "styled-components";
import { FilterByType } from "./filter-bar-type";
import { FilterByPriority } from "./filter-by-priority";

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`;

export function FilterBar() {
    return (
        <FilterContainer>
            <FilterByType />
            <FilterByPriority />
        </FilterContainer>
    )
}