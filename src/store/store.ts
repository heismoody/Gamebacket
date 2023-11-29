import { create } from "zustand";

export interface CartItem{
    id: number;
    title?: string;
    image?: string;
    price?: number;
}

interface CartStore {
    items: CartItem[];
    add: (item: CartItem) => void;
    // sum: (item: CartItem) => number;
    delete: () => void;
}

const useCartStore = create<CartStore>(set => ({
    items: [],
    add: (item) => set( store => ({items: [...store.items, item]})),
    delete: () => set(()=>({items: []}))
}))

export default useCartStore;