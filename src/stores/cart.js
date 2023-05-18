import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"


export const useCartStore = defineStore("cart", {
  state: () => {
    return { 
      dishes: useLocalStorage('dishes', []),
     };
  },
  actions: {
  },
  getters: {
    
  },
});