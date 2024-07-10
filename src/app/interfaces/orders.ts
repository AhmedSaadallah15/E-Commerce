import { Iproduct } from "./products"

export interface Orders {
  cartItems: CartItem[];
  createdAt: string;
  id: number;
  isDelivered: boolean;
  isPaid: boolean;
  paymentMethodType: string;
  shippingPrice: number;
  taxPrice: number;
  totalOrderPrice: number;
  updatedAt: string;

  _id: string;

}

interface CartItem {
  count: number;
  price: number;
  product: Iproduct;
  _id: string;
}
