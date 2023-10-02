<script >
import { store } from '../src/store.js';
import SearchButton from '../src/components/searchButton.vue'
import AppCard from '../src/components/AppCard.vue';
import AppHeader from '../src/components/AppHeader.vue'



export default {
  name: "AppCard",
  components: {
    SearchButton,
    AppCard,
    AppHeader,

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
  <card></card>
</template>

<style scoped></style>
