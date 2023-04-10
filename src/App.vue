<template>
  <div>
    <h1 class="text-4xl font-bold underline">
    Hello world!
  </h1>
  <img src="./assets/svg/adviceCardIcon-3.svg" alt="">
  <HeaderContent></HeaderContent>
  </div>
</template>

<script>
import HeaderContent from "@/components/layouts/Header.vue"
export default {
  name: 'App',
  components: {
    HeaderContent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
