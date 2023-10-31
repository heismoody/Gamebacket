import { create } from "zustand";

interface CartStore{
    product: [
        actualprice?: string,
        image?: string
    ];
    addtocart: (cartProduct: string[]) => void;
}

const useCartStore = create<CartStore>(set=>({
    product: [],
    addtocart: (cartProduct) => set(store => ({product: [...store.product, cartProduct]}))
}))

export default useCartStore;