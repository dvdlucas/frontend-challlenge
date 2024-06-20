"use client"

import styles from "./page.module.css";
import { FilterBar } from "../components/filter-bar";
import { ProductList } from "@/components/products-list";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductList />
    </main>
  );
}
