<script >
import { store } from '../src/store.js';

import AppCard from '../src/components/AppCard.vue';
import AppHeader from '../src/components/AppHeader.vue'

export default {
  name: "AppCard",
  components: {

    AppCard,
    AppHeader,
  },
  data() {
    return {
      store,

    }
  },

  created() {
    store.fetchData();
  },
}

</script>




<template>
  <AppHeader></AppHeader>
  <AppCard></AppCard>
</template>

<style scoped></style>
