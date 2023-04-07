import { IProduct } from "@/libs/types";
import Image from "next/image";

interface IProductProps {
  product: IProduct;
}

export default function Product({ product }: IProductProps) {
  return (
    <div>
      <h1>{product.title}</h1>
      <Image src={product.image} width={100} height={100} alt={product.title} />
      <div>{product.price}</div>
    </div>
  );
}
