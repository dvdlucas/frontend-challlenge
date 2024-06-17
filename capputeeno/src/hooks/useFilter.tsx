import { FilterContext } from "@/middlewares/filter-context";
import { useContext } from "react";

export function useFilter() {
    return useContext(FilterContext);
}