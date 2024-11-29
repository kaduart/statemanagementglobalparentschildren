/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';

import { useState } from 'react';
import Header from '../header';
import ListCard from '../listCard';

type FormData = {
    precoMin: number,
    precoMax: number
}
export default function FilterCard() {

    const [require, setRequire] = useState<FormData>();
    const [formData, setFormData] = useState<FormData>({
        precoMin: 0,
        precoMax: 0
    });


    function handleOnSubmit(event: any) {
        event.preventDefault();
        if (formData) {
            setRequire(formData);
        }
    }

    function handleChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    }

    return (
        <>
            <Header />

            <div className="smg-container">
                <div className="smh-filter-section">
                    <form onSubmit={handleOnSubmit} className="smg-filter-card">
                        <h2>Filtrar Produtos</h2>
                        <hr className='smg-hr' />

                        <div className="smg-filter-ipt">
                            <input
                                type="text"
                                name='precoMin'
                                className='smg-ipt'
                                onChange={handleChange}
                                value={formData.precoMin || ''}
                                placeholder="Preço mínimo" />
                        </div>

                        <div className="smg-filter-ipt">
                            <input
                                type="text"
                                name='precoMax'
                                className='smg-ipt'
                                onChange={handleChange}
                                value={formData.precoMax || ''}
                                placeholder="Preço máximo" />
                        </div>

                        <div className="smg-filter-btn">
                            <button type='submit' className='smg-btn-primary'>Filtrar</button>
                        </div>
                    </form>
                </div>
            </div>

            {

                <ListCard require={require} />
            }
        </>
    )
}