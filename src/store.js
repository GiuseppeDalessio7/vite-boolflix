import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=adcfdbc2343d4dfc71ea04562f9aee24',
    serie_url: "https://api.themoviedb.org/3/search/multi?api_key=adcfdbc2343d4dfc71ea04562f9aee24",
    filmScelto: '',
    films: [],
    linguaFilm: null,
    aFlag: 0,
    singleLanguage: [],
    valutation: [],


    //Chiamata in axios con il link alla api e la key
    fetchData() {
        axios
            .get(this.base_url)
            .then(response => {
                this.filmScelto = response.data.results
                console.log(response.data.results);
            })
    },
})












