<script >
import { store } from '../src/store.js';

import AppCard from '../src/components/AppCard.vue';
import AppHeader from '../src/components/AppHeader.vue'

export default {
  name: "App",
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

<style scoped>
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
</style>
