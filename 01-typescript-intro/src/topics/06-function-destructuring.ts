
export interface Product {
    description: string;
    price: number;
}


const phone: Product = {
    description: 'Samsung Galaxy S10',
    price: 500
}

const tablet: Product = {
    description: 'iPad Pro',
    price: 800
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
    let total = 0;
    options.products.forEach(({price}) => {
        total += price;
    });
    return [total, total * options.tax];
}

const shopingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shopingCart,
    tax
});

console.log(`Total: ${result[0]}`)
console.log(`Tax: ${result[1]}`)



