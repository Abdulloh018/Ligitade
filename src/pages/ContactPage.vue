<template>
  <NavbarContent />
  <ContactSection />
  <FooterContent />
</template>
<script>
import NavbarContent from "@/components/Blocks/Navbar.vue"
import FooterContent from "@/components/layouts/Footer.vue"
import ContactSection from "@/components/layouts/Contact.vue"

export default {
  name: "ContactPage",
  components: {
    NavbarContent,
    ContactSection,
    FooterContent
  }
}
</script>
<style scoped>
  nav {
    background-color: #0072B5;
  }
</style>