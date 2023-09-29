<script>
import { store } from '../store.js';
export default {
    name: 'searchButton',
    data() {
        return {
            store,
            lingue: ['en', 'it', 'de', 'fr'],
            // flags: [
            // {

            // img: "https://flagsapi.com/IT/flat/64.png",
            // language: "it"
            // },
            // {
            // img: "https://flagsapi.com/DE/flat/64.png",
            // language: "de"
            // },
            // {
            // img: "https://flagsapi.com/FR/flat/64.png",
            // language: "fr"
            // },
            // {
            // img: "https://flagsapi.com/EN/flat/64.png",
            // language: "en"
            // },
            // ]


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
    <form action="" @submit.prevent>
        <input v-model="store.films" class="p-1 my-2" type="text" name="search" placeholder="Cerca Film o Serie" id=""
            required>
        <button class="btn btn-outline-danger" @click="searchFilms()">cerca</button>
        <div class="container">
            <ul>
                <li class="d-flex flex-column text-danger" v-for="(film, i) in this.store.filmScelto">
                    <div><span>TITOLO:</span>{{ this.store.filmScelto[i].title }}</div>
                    <div><span>TITOLO DEL FILM:</span> {{ this.store.filmScelto[i].original_title }}</div>
                    <div><span>LINGUA:</span> {{ this.store.filmScelto[i].original_language }}</div>
                    <div> <span v-if="!lingue.includes(film.original_language)">lingua: {{ film.original_language }}</span>
                        <img class="flag" src="../assets/img/gb.png" alt="en" v-if="film.original_language == 'en'">
                        <img class="flag" src="../assets/img/it.png" alt="en" v-if="film.original_language == 'it'">
                        <img class="flag" src="../assets/img/de.png" alt="en" v-if="film.original_language == 'de'">
                        <img class="flag" src="../assets/img/fr.png" alt="en" v-if="film.original_language == 'fr'">
                    </div>
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

.flag {
    height: 25px;
    aspect-ratio: 2/2;
}
</style>






