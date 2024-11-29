import { ProductDTO } from "../models/product.model";

export function findByPrice(min: number, max: number): ProductDTO[] {
    const filterProduct = products
        .filter((product: ProductDTO) => {
            if (min !== 0 && max !== 0) {

                return product.price >= min && product.price <= max;
            } else if (min !== 0) {

                return product.price >= min;
            } else if (max !== 0) {

                return product.price <= max;
            }
        })
        .sort((x, y) => x.price - y.price);

    return filterProduct;
}
export function getAllProducts() {
    return products;
}

const products: ProductDTO[] = [
    {
        id: 1,
        name: "The Lord of the Rings",
        price: 90.5,
    },
    {
        id: 2,
        name: "Smart TV",
        price: 2190.0,
    },
    {
        id: 7,
        name: "PC Gamer X",
        price: 1350.0,
    },
    {
        id: 15,
        name: "PC Gamer Weed",
        price: 2200.0,
    },
    {
        id: 21,
        name: "PC Gamer Tx",
        price: 1680.0,
    },
    {
        id: 17,
        name: "PC Gamer Turbo",
        price: 1280.0,
    },
    {
        id: 20,
        name: "PC Gamer Tr",
        price: 1650.0,
    },
    {
        id: 9,
        name: "PC Gamer Tera",
        price: 1950.0,
    },
    {
        id: 13,
        name: "PC Gamer Plus",
        price: 1350.0,
    },
    {
        id: 11,
        name: "PC Gamer Nitro",
        price: 1450.0,
    },
    {
        id: 23,
        name: "PC Gamer Min",
        price: 2250.0,
    },
    {
        id: 16,
        name: "PC Gamer Max",
        price: 2340.0,
    },
    {
        id: 18,
        name: "PC Gamer Hot",
        price: 1450.0,
    },
];