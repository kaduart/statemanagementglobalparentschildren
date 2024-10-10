import { createContext } from "react";

export type ContextProdutosCountType = {
    contextProdutosCount: number;
    setContextProdutosCount: (contextProdutosCount: number) => void;
}

export const ContextProdutosCount = createContext<ContextProdutosCountType>({
    contextProdutosCount: 0,
    setContextProdutosCount: () => { },
});