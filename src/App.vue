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
  <SearchButton></SearchButton>
</template>

<style scoped></style>
