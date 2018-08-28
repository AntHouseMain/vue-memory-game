<template>
  <v-app>
    <card-list></card-list>
  </v-app>
</template>

<script>
import Cards from './components/cards/CardList';

export default {
  name: 'App',
  components: {
    'card-list': Cards
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
