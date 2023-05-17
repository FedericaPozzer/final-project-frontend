import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"


export const useCartStore = defineStore("cart", {
  state: () => {
    return { 
      dishes: useLocalStorage('dishes', [])
     };
  },
  actions: {
    addDish(dish) {
      this.dishes.push(dish);
    },
    deleteDish(key) {
        delete this.dishes[key];
    },
    reset() {
      this.count = 0;
    }
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
    squareCount: (state) => {
      return state.count ** 2;
    },
  },
});