import './styles.css';

import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../models/product.model';
import * as productService from '../../services/product-service';
import { ContextProdutosCount } from '../../utils/contexts/context-produtos';
import ProductoCard from '../produtoCard';

type Props = {
    require?: {
        precoMin: number,
        precoMax: number
    }
}
export default function ListCard({ require }: Props) {

    const [produtos, setProdutos] = useState<ProductDTO[]>();

    const { setContextProdutosCount } = useContext(ContextProdutosCount);

    useEffect(() => {
        if (require !== undefined) {
            const lista = productService.findByPrice(require.precoMin, require.precoMax);

            updateListaProdutos(lista);

        } else if (require === undefined) {
            const lista = productService.getAllProducts();

            updateListaProdutos(lista);
        }

    }, [require]);

    function updateListaProdutos(lista: ProductDTO[]): void {

        if (lista.length > 0) {
            setProdutos(lista);
            setContextProdutosCount(lista.length);
        }

    }

    return (
        <div className="smg-container">
            <div className="smg-list-section">
                <div className="smg-list-card">

                    <h2>Lista de Produtos</h2>
                    <hr className="smg-hr" />

                    {
                        produtos &&
                        produtos.map((produto: ProductDTO) => (
                            <ProductoCard key={produto.id} produto={produto} />

                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}