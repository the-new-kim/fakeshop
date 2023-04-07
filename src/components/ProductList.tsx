import Link from "next/link";
import Product from "./Product";
import { slugify } from "@/libs/utils";
import { store } from "@/redux/store";

export default function ProductList() {
  const products = store.getState().productReducer.homeProducts;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link
            href={`/products/${slugify(product.category)}/${product.id}`}
            prefetch={false}
          >
            <Product product={product} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
