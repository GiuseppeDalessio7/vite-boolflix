<script >
import { store } from '../src/store.js';


export default {
  name: "App",
  components: {

  },
  data() {
    return {
      store,

    }
  },

}
</script>



<template>
  <h1>{{ store.selectedFilm }}</h1>
</template>

<style scoped></style>
