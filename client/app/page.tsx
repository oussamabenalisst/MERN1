"use client";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  type Product = {
    name: string;
    class: string;
    pr: number;
    img: string;
  };
  const [products, Setproducts] = useState<Product[]>([]);
  useEffect(() => {
    const datafetch = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost:5000/product"
        );
        Setproducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    datafetch();
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {products.map((product, index) => {
        return <p key={index}>{product.name}</p>;
      })}
    </div>
  );
}
