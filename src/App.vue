<template>
  <HeaderContent />
  <AdviceContent />
  <WhoWe />
</template>

<script>
import HeaderContent from "@/components/layouts/Header.vue"
import AdviceContent from "@/components/layouts/Advice.vue"
import WhoWe from "@/components/layouts/WhoWeAre.vue"
export default {
  name: 'App',
  components: {
    HeaderContent,
    AdviceContent,
    WhoWe
  }
}
</script>

<style>
@import url("./assets/styles/output.css");
@import url("./assets/styles/main.css");


body {
  font-family: sans-serif;
  color: #fff;
}
</style>
