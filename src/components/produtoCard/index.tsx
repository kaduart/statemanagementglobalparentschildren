import './styles.css';
import { ProductDTO } from "../../models/product.model";
import img from '../../assets/images/computer.png';

type Props = {
    produto: ProductDTO;
}
export default function ProductoCard({ produto }: Props) {

    return (
        <div className="smg-list">
            <div className='smg-list-item'>
                <div className="smg-list-item-info">
                    <p className='smg-list-item-title'>{produto.name}</p>
                    <label className="smg-list-item-content">{produto.price}</label>
                </div>
                <img src={img} alt="PC Gamer" />

            </div>
        </div>
    )
}