import { notFound } from "next/navigation";
import { getProducts } from "@/app/page";
import { IProduct } from "@/libs/types";
import { slugify } from "@/libs/utils";

interface IProductDetailProps {
  params: { id: string };
}

async function getProduct(id: string) {
  let result;
  try {
    result = (await (
      await fetch(`https://fakestoreapi.com/products/${id}`)
    ).json()) as IProduct;
  } catch (error) {
    console.log(`❌ No product found with id ${id} ❌`);
  }

  return result;
}

export default async function ProductPage({
  params: { id },
}: IProductDetailProps) {
  const product = await getProduct(id);

  if (typeof product === "undefined") return notFound();

  return <div>Product: {product.title}</div>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    category: slugify(product.category),
    id: product.id + "",
  }));
}

export const dynamicParams = true;
