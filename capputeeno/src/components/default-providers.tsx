"use client"
import { FilterContextProvider } from "@/middlewares/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode;
}

const theme = {
    desktopBreakpoint: "768px"
}

export function DefaultProvider({ children }: DefaultProvidersProps) {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}