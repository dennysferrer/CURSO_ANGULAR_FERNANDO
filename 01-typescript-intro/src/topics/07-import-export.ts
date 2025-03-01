import { Product, taxCalculation } from './06-function-destructuring'


const shopingCart: Product[] = [
    {
        description: 'Samsung Galaxy S10',
        price: 500
    },
    {
        description: 'iPad Pro',
        price: 800
    }
]

const [ total, tax ] = taxCalculation({ 
    products: shopingCart,
    tax: 0.15
 })

 console.log(`Total: ${total}`)
    console.log(`Tax: ${tax}`)