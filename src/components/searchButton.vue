<script>
import { store } from '../store.js';
export default {
    name: 'searchButton',
    data() {
        return {
            store,
            flags: [
                {
                    img: "src/assets/img/IT.png",
                    language: "it"
                },
                {
                    img: "src/assets/img/DE.png",
                    language: "de"
                },
                {
                    img: "src/assets/img/FR.png",
                    language: "fr"
                },
                {
                    img: "src/assets/img/GB.png",
                    language: "en"
                },
                {
                    img: "src/assets/img/unknown.png",
                    language: "unknown"
                },
            ]

        }
    },

    created() {
        store.fetchData();
    },
    methods: {

        searchlanguage(i) {
            let valueLang = this.store.filmScelto[i].original_language
            let found = false
            this.flags.forEach(bandiera => {
                if (bandiera.language === valueLang) {
                    found = true
                    console.log(found);
                }

            })
            return valueLang


        },
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
            <ul v-for="(film, i) in this.store.filmScelto">
                <li class="d-flex flex-column text-danger">
                    <div><span>TITOLO:</span>{{ this.store.filmScelto[i].title }}</div>
                    <div><span>TITOLO DEL FILM:</span> {{ this.store.filmScelto[i].original_title }}</div>
                    <div><span>LINGUA:</span> {{ this.store.filmScelto[i].original_language }}</div>
                    <div>{{ searchlanguage(i) }}> </div>
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






