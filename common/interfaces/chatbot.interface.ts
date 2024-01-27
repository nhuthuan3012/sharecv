import { IOrders } from "./order.interface";

interface SkuProduct {
    id: number;
    sku: string;
    name: string;
    price: number;
    image: string;
    product_id: number;
}

export type SkuProducts = SkuProduct[];

export interface IChatbotResponse {
    refund_orders: IOrders;
    status: string;
    content: string;
    recommended_products: SkuProducts;
    intent: string;
}
