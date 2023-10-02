<script>
import { store } from '../store.js';
export default {
    name: "AppHeader",
    data() {
        return {
            store,
        }
    },

    created() {
        store.fetchData();
    },


    methods: {
        searchFilms() {

            this.store.base_url = this.store.base_url + `&query=${store.films}`
            console.log(this.store.base_url);
            this.store.fetchData()

        }
    }
}
</script>

<template>
    <div class="mybg ">
        <div class="d-flex justify-content-between align-items-center ">
            <h1 class="my_red p-2 ">BOOLFLIX</h1>
            <div class="p-3 d-flex">
                <input v-model="store.films" class="p-1 mx-2" type="text" name="search" placeholder="Cerca Film o Serie"
                    id="" required>
                <button class="btn btn-outline-danger align-items-center" @click="searchFilms()"> <span><i
                            class="fa-solid fa-magnifying-glass fa-sm" style="color: #ffffff;"></i></span> <span
                        class=" mx-1">Cerca</span></button>
            </div>
        </div>
    </div>
</template>









<style  scoped>
.mybg {
    background-color: black;
}

.my_red {
    color: rgb(229, 9, 20);
}
</style>