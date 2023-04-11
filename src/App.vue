<template>
  <HeaderContent />
  <AdviceContent />
  <WhoWeAre />
  <ClientsSection />
  <AttorneysSection />
  <ContactSection />
  <FreeConsultation />
  <FooterContent />
</template>

<script>

import HeaderContent from "@/components/layouts/Header.vue"
import AdviceContent from "@/components/layouts/Advice.vue"
import WhoWeAre from "@/components/layouts/WhoWeAre.vue"
import ClientsSection from "@/components/layouts/Clients.vue"
import AttorneysSection from "@/components/layouts/Attorneys.vue"
import ContactSection from "@/components/layouts/Contact.vue"
import FreeConsultation from "@/components/layouts/Consultation.vue"
import FooterContent from "@/components/layouts/Footer.vue"

export default {
  name: 'App',
  components: {
    HeaderContent,
    AdviceContent,
    WhoWeAre,
    ClientsSection,
    AttorneysSection,
    ContactSection,
    FreeConsultation,
    FooterContent
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
