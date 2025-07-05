"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [products, Setproducts] = useState([{}]);
  useEffect(() => {
    const datafetch = async () => {
      await fetch("/product")
        .then((response) => response.json())
        .then((data) => {
          console.log("test");
          console.log(data);
          Setproducts(data);
        });
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
