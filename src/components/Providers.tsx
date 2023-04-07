"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

import type { ReactNode } from "react";

interface IProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
