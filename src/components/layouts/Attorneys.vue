<template>
  <section id="clients" class="bg-[#252B42]">
    <div class="container">
      <div class="section-title text-center  py-16 maxWidth4xl:py-20">
        <h2 class="text-[40px] mb-[10px]">Meet Our Attorneys</h2>
        <p class="text-sm px-10 maxWidthmd:px-20 maxWidthScreensm:px-36 maxWidth4xl:px-[180px] lg:px-[300px] maxWidth5xl:px-[330px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div class="flex flex-wrap justify-center gap-10 pt-10 pb-[100px] lg:flex-nowrap maxWidth5xl:pt-14 px-6 maxWidthsm:px-0">
        <AttorneysCard v-for="card in cards" :key="card.id" :name="card.name" :job="card.job" :imgUrl="card.imgUrl"/>
      </div>
    </div>
  </section>
</template>
<script>
import AttorneysCard from "@/components/Blocks/AttorneysCard.vue"
import attorneyPhoto1 from "@/assets/img/attorneyPhoto-1.png"
import attorneyPhoto2 from "@/assets/img/attorneyPhoto-2.png"
import attorneyPhoto3 from "@/assets/img/attorneyPhoto-3.png"
export default {
  name: "AttorneysSection",
  components: {
    AttorneysCard
  },
  data() {
    return {
      cards: [
        {
          name: "Ashley Fletcher",
          job: "LAYER & CEO",
          imgUrl: attorneyPhoto1,
          id: 1
        },
        {
          name: "Rodney Stratton",
          job: "CEO",
          imgUrl: attorneyPhoto2,
          id: 2
        },
        {
          name: "Avie Beaton",
          job: "LAYER CIVIL LAW",
          imgUrl: attorneyPhoto3,
          id: 3
        }
      ]
    }
  }
}
</script>
<style>
  
</style>