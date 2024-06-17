import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetcher = () => {
    return axios.post("localhost:3333", `
        query{
            allProducts{
            id
            name
            price_in_cents
        }     
    }`);
}

export function useProducts() {
    const { } = useQuery({
        queryFn: fetcher,
        queryKey: ["products"],
    })
}