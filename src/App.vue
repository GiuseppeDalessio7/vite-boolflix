<script >
import { store } from '../src/store.js';
import SearchButton from '../src/components/searchButton.vue'


export default {
  name: "App",
  components: {
    SearchButton,

  },
  data() {
    return {
      store,

    }
  },

}
</script>



<template>
  <div class="mybg">
    <h1 class="text-center my_red text-white">Cerca il film o la serie Tv</h1>
    <SearchButton></SearchButton>
  </div>
</template>

<style scoped>
.mybg {
  background-color: black;
}

.my_red {
  background-color: rgb(229, 9, 20);
}
</style>
