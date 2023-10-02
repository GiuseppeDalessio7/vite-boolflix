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
            ],
            valutation: [],
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

        convertStar(voteaverage) {
            let star = Math.ceil((voteaverage / 10) * 5)
            this.store.valutation.push(star)
            console.log(this.store.valutation);
            return star
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
    <div class="container mt-4 ">
        <div class="container d-flex flex-wrap">
            <div class="row mt-2 ">
                <div class=" col-lg-4 col-md-3 col-sm-4 mb-3" v-for="(film, i) in this.store.filmScelto">
                    <div class="card position-relative">
                        <img id="imgegual"
                            :src="film.backdrop_path ? `https://image.tmdb.org/t/p/w342/${film.backdrop_path} ` : 'https://www.pzsport.it/wp-content/uploads/2022/07/anteprima-non-disponibile-2.jpg'"
                            alt="">
                        <div class="mytext testo ">
                            <h6 class="card-title "><small>Titolo:</small> {{ film.title ? film.title : film.name }} </h6>
                            <h6 class="card-text"><small>Titolo del film-serie:</small> {{ film.original_title ??
                                film.original_name }}
                            </h6>
                            <h6> <span class="text-dark" style="text-transform: uppercase">LINGUA:</span>
                                <img id="sconosciuto" class="language_flag " :src="getFlagImage(film)" alt="">
                            </h6>
                            <div>
                                VOTO: {{ convertStar(film.vote_average) }}
                                <template v-for="stelle in 5">
                                    <i class="fa-solid fa-star"
                                        :style="{ color: stelle <= convertStar(film.vote_average) ? '#fff300' : 'white' }"></i>
                                </template>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style  scoped>
.card {
    width: 350px;
    height: 100%;

}

.card:hover .testo {
    background-color: red;
    opacity: 1;
}

/* .mytext:hover { */
/* background-color: red; */
/* display: block; */
/* position: absolute; */
/* left: 0%; */
/* top: 0%; */
/* width: 100%; */
/* padding: 5rem; */
/* height: 100%; */
/* transition: all 3s; */
/* background-color: red; */
/* } */
.card:hover .testo {
    opacity: 1;
}

.testo {
    width: 100%;
    height: 100%;
    opacity: 0;
}

.card:hover {
    background-color: red;
}

.testo {
    background-color: red;
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    padding: 2rem;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
    transition: all 2s;
    background-color: red;
}

.card>img:hover {
    display: none;
}


.mybg {
    background-color: black;
}

.my_red {
    color: rgb(229, 9, 20);
}

span {
    color: white;
}

#imgegual {
    max-width: 346px;
    height: 194px;

}

#sconosciuto {
    width: 25px;
    background-color: rgb(229, 9, 20);
    aspect-ratio: 2/2;
    border-radius: 50%;
}

/* .cardcolor { */
/* background-color: rgba(229, 9, 20); */
/* } */
</style>






