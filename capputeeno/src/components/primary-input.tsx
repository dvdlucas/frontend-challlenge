import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;
    background-color: var(--bg-secondary);
    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 14px;
        line-height: 22px;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 232px;
    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%)
    }
    @media(min-width: ${props => props.theme.desktopBreakpoint}){
         width: 352px;
    }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    handleChange: (value: string) => void;
}

export function PrimaryInputSearchIcon({ handleChange, ...rest }: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput onChange={(event) => handleChange(event.target.value)} {...rest} />
            <SearchIcon />
        </InputContainer>
    )
}
