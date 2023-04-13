<template>
  <div>
    <HeaderContent />
    <AdviceContent />
    <WhoWeAre />
    <ClientsSection />
    <AttorneysSection />
    <ContactSection />
    <FreeConsultation />
    <FooterContent />
  </div>
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
  name: "IndexVue",
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
  
</style>