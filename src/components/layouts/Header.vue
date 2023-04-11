<template>
  <header>
    <NavbarContent />
    <HeroSection />
  </header>
</template>
<script>
import NavbarContent from "@/components/Blocks/Navbar.vue"
import HeroSection from "@/components/layouts/Hero.vue"
export default {
  name: "HeaderContent",
  components: {
    NavbarContent,
    HeroSection
  }
}
</script>
<style>
  header {
  background-image: url(@/assets/img/header-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>