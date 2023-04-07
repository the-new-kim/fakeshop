import { IProduct } from "@/libs/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data: IProduct[] = await (
    await fetch("https://fakestoreapi.com/products")
  ).json();

  return NextResponse.json(data);
}

//https://fakestoreapi.com/products
