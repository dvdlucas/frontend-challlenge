"use client"

import styles from "./page.module.css";
import { FilterBar } from "../components/filter-bar";
import { ProductList } from "@/components/products-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductList />
      </main>
    </QueryClientProvider>
  );
}
