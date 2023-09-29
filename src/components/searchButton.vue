<script>
import { store } from '../store.js';
export default {
    name: 'searchButton',
    data() {
        return {
            store,
            flags: [{
                img: "src/assets/img/fr.png",
                language: 'fr',
            },
            {
                img: "src/assets/img/it.png",
                language: 'it',
            },
            {
                img: "src/assets/img/gb.png",
                language: 'en',
            },
            {
                img: "src/assets/img/de.png",
                language: 'de',
            },
            ]
        }
    },

    created() {
        store.fetchData();
    },

    methods: {
        getFlagImage(singleFilm) {

            let languageValue = singleFilm.original_language
            console.log(languageValue);

            let unrecognized = 'https://www.pngall.com/wp-content/uploads/2/Question-Mark-PNG-Transparent-HD-Photo.png'

            this.flags.forEach(flag => {
                if (flag.language === languageValue) {
                    //se è stato trovato riassegno a film.original_language il valore dell' img desiderata
                    unrecognized = flag.img
                }
            });

            return unrecognized


        },

        searchTV() {

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
    <div class="container mt-4 ">

        <input v-model="store.films" class="p-1 my-2" type="text" name="search" placeholder="Cerca Film o Serie" id=""
            required>
        <button class="btn btn-outline-danger" @click="searchFilms()">cerca</button>
        <div class="row ">
            <div class="col-md-5" v-for="(film, i) in this.store.filmScelto">
                <div class="card mb-4">
                    <img class="card-img-top"
                        :src="film.backdrop_path ? `https://image.tmdb.org/t/p/w342/${film.backdrop_path} ` : 'https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-it-1-1674070998.png?crop=0.5xw:1xh;center,top&resize=640:*'"
                        alt="">

                    <div class="card-body cardcolor ">
                        <h4 class="card-title">TITOLO: {{ film.title ? film.title : film.name }} </h4>
                        <h4 class="card-title">TITOLO DEL FILM/SERIE: {{ film.original_title ?? film.original_name }}
                        </h4>
                        <small>LINGUA:
                            <img id="sconosciuto" class="language_flag " :src="getFlagImage(film)" alt=""></small>
                        <small>
                            VOTO: {{ film.vote_average }}
                        </small>

                    </div>
                </div>
            </div>








        </div>
    </div>
</template>

<style  scoped>
span {
    color: white;
}

#sconosciuto {
    width: 25px;
    background-color: rgb(229, 9, 20);
    aspect-ratio: 2/2;
    border-radius: 50%;
}

.cardcolor {
    background-color: rgb(229, 9, 20);
}
</style>






