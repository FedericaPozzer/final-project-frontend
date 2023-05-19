import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"


export const useEndpointStore = defineStore("endpoint", {
    state: () => {
        return {
            endpoint: "http://127.0.0.1:8000/",
        };
    },
    actions: {
    },
    getters: {

    },
});    