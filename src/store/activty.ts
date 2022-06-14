import { defineStore } from 'pinia';


export const activtyStore = defineStore('activty', {
    state: () => {
        return {
            activty: 0,
        }
    },
    getters: {},
    actions: {
        setActivty() {
            this.activty++;
        }
    }
})

