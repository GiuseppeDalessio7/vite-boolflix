<script>
import { store } from '../store.js';
export default {
    name: 'searchButton',
    data() {
        return {
            store,

        }
    },
    created() {
        store.fetchData();
    },
    methods: {

        //faccio un metodo dove prendo il mio url e lo cambio in modo dinamico
        searchFilms() {

            this.store.base_url = this.store.base_url + `&query=${store.films}`
            console.log(this.store.base_url);
            this.store.fetchData()

        }

    },

}
</script>


<template>
    <form>
        <input v-model="store.films" class="p-1 my-2" type="text" name="search" placeholder="Cerca Film o Serie" id="">
        <button class="btn btn-outline-danger" @click="searchFilms()">cerca</button>
        <div class="container">
            <ul v-for="(film, i) in this.store.filmScelto">
                <li class="d-flex flex-column text-danger">
                    <div><span>TITOLO:</span>{{ this.store.filmScelto[i].title }}</div>
                    <div><span>TITOLO DEL FILM:</span> {{ this.store.filmScelto[i].original_title }}</div>
                    <div><span>LINGUA:</span> {{ this.store.filmScelto[i].original_language }}</div>
                    <div><span>VOTO:</span> {{ this.store.filmScelto[i].vote_average }}</div>
                </li>
            </ul>
        </div>
    </form>
</template>

<style  scoped>
span {
    color: white;
}
</style>






