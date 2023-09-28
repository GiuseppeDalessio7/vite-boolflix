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
  <div class="mybg">
    <h1 class="text-center my_red text-white">Cerca il film o la serie Tv</h1>
    <div>
      <input type="search" placeholder="Cerca Film o Serie" class="p-1 my-2">
      <button class="btn btn-outline-danger" type="submit ">Cerca</button>

    </div>
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
