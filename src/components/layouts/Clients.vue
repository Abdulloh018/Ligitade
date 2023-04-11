<template>
  <section id="clients" class="bg-[#252B42]">
    <div class="container">
      <div class="section-title text-center  py-16 max-w-4xl:py-20">
        <h2 class="text-[40px] mb-[10px]">What Clients Say</h2>
        <p class="text-sm px-10 max-w-lg:px-20 max-w-screen-sm:px-36 max-w-4xl:px-[180px] lg:px-[300px] max-w-5xl:px-[330px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div class="flex flex-wrap justify-center gap-10 pt-10 pb-[100px] lg:flex-nowrap max-w-5xl:pt-14 px-6 max-w-sm:px-0">
        <ClientsCard v-for="card in cards" :key="card.id" :name="card.name" :text="card.text" :job="card.job" :imgUrl="card.imgUrl" :svg="card.svg"/>
      </div>
    </div>
  </section>
</template>
<script>
import ClientsCard from "@/components/Blocks/ClientsCard.vue"
import clientPhoto1 from "@/assets/img/clientPhoto-1.png"
import clientPhoto2 from "@/assets/img/clientPhoto-2.png"
import clientPhoto3 from "@/assets/img/clientPhoto-3.png"
import starsSvg from "@/assets/svg/stars.svg"
export default {
  name: "clientsSection",
  components: {
    ClientsCard
  },
  data() {
    return {
      cards: [
        {
          name: "Regina Miles",
          text: "Slate helps you see how many more days you need to work to reach your financial goal.",
          job: "Designer",
          imgUrl: clientPhoto1,
          svg: starsSvg,
          id: 1
        },
        {
          name: "Regina Miles",
          text: "Slate helps you see how many more days you need to work to reach your financial goal.",
          job: "Designer",
          imgUrl: clientPhoto2,
          svg: starsSvg,
          id: 2
        },
        {
          name: "Regina Miles",
          text: "Slate helps you see how many more days you need to work to reach your financial goal.",
          job: "Designer",
          imgUrl: clientPhoto3,
          svg: starsSvg,
          id: 3
        }
      ]
    }
  }
}
</script>
<style>
  
</style>