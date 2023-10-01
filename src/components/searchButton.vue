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

        <input v-model="store.films" class="p-1 mx-2" type="text" name="search" placeholder="Cerca Film o Serie" id=""
            required>
        <button class="btn btn-outline-danger" @click="searchFilms()">cerca</button>
        <div class="container d-flex flex-wrap">
            <div class="row mt-2 ">
                <div class=" col-lg-4 col-md-3 col-sm-4 mb-3 " v-for="(film, i) in this.store.filmScelto">
                    <img id="imgegual" class="card-img-top"
                        :src="film.backdrop_path ? `https://image.tmdb.org/t/p/w342/${film.backdrop_path} ` : 'https://www.pzsport.it/wp-content/uploads/2022/07/anteprima-non-disponibile-2.jpg'"
                        alt="">

                    <div class="card-body cardcolor" style="width: 342px;">
                        <h6 class="card-title"><small>Titolo:</small> {{ film.title ? film.title : film.name }} </h6>
                        <h6 class="card-text"><small>Titolo del film-serie:</small> {{ film.original_title ??
                            film.original_name }}
                        </h6>
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

#imgegual {
    width: 342px;
    height: 250px;
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






