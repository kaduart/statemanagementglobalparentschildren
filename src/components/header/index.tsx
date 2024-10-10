import { useContext } from 'react';
import './styles.css';
import { ContextProdutosCount } from '../../utils/contexts/context-produtos';


export default function Header() {

    const { contextProdutosCount } = useContext(ContextProdutosCount);

    return (

        <header>
            <div className="smg-container">
                <div className="smg-header-section">

                    <h1>State Management Global</h1>
                    <label>{contextProdutosCount} produto(s) filtrado(s)</label>

                </div>
            </div>
        </header>

    )
}