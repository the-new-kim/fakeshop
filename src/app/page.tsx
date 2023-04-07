import { IProduct } from "@/libs/types";

import { store } from "@/redux/store";
import { setProducts } from "@/redux/features/productSlice";
import ProductList from "@/components/ProductList";

export async function getProducts() {
  const result: IProduct[] = await (
    await fetch("https://fakestoreapi.com/products")
  ).json();

  return result;
}

export default async function Home() {
  const products = await getProducts();
  store.dispatch(setProducts(products));

  return (
    <main>
      <div>
        <ProductList />
      </div>
    </main>
  );
}
