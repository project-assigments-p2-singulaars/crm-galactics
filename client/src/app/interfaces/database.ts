export interface TopLevel {
    naves:     Nave[];
    costumers: Costumer[];
    orders:    Order[];
}

export interface Costumer {
    name:     string;
    email:    string;
    number:   number;
    location: string;
}

export interface Nave {
    id:          number;
    name:        string;
    img:         string;
    price:       number;
    description: string;
    stock:       number;
}

export interface Order {
    order_id:    number;
    customer:    string;
    products:    Product[];
    total_price: number;
}

export interface Product {
    id:       number;
    quantity: number;
}

