import { create } from "zustand";

export interface CartItem{
    id: number;
    title?: string;
    image?: string;
}

interface CartStore {
    items: CartItem[];
    add: (item: CartItem) => void;
    delete: () => void;
}

const useCartStore = create<CartStore>(set => ({
    items: [],
    add: (item) => set( store => ({items: [...store.items, item]})),
    delete: () => set(()=>({items: []}))
}))

export default useCartStore;