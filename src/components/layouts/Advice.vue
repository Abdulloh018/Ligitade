<template>
  <section id="advice" class="bg-[#252B42]">
    <div class="container">
      <div class="section-title text-center  py-16 max-w-4xl:py-20">
        <h2 class="text-[40px] mb-[10px]">Practice Advice</h2>
        <p class="text-sm px-10 max-w-lg:px-20 max-w-screen-sm:px-36 max-w-4xl:px-[180px] lg:px-[300px] max-w-5xl:px-[330px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div class="flex flex-wrap justify-center gap-10 pt-10 pb-[100px] lg:flex-nowrap max-w-5xl:pt-14 px-6 max-w-sm:px-0">
        <AdviceCard v-for="card in cards" :key="card.id" :title="card.title" :text1="card.text1" :text2="card.text2" :text3="card.text3" :text4="card.text4" :text5="card.text5" :imgUrl="card.imgUrl" :btntext="card.btntext"/>
      </div>
    </div>
  </section>
</template>
<script>
import AdviceCard from "@/components/Blocks/AdviceCard.vue";
import adviceImg1 from "@/assets/svg/adviceCardIcon-1.svg"
import adviceImg2 from "@/assets/svg/adviceCardIcon-2.svg"
import adviceImg3 from "@/assets/svg/adviceCardIcon-3.svg"
export default {
  name: "AdviceContent",
  components: {
    AdviceCard,
  },
  data() {
    return {
      cards: [
        {
          title: "Practice Advice",
          text1: "- The best products start with Figma",
          text2: "- Design with real data",
          text3: "- Lightning fast prototyping",
          text4: "- Fastest way to organize",
          text5: "- Work at the speed of thought.",
          btntext: "Learn More",
          imgUrl: adviceImg1,
          id: 1
        },
        {
          title: "Practice Advice",
          text1: "- The best products start with Figma",
          text2: "- Design with real data",
          text3: "- Lightning fast prototyping",
          text4: "- Fastest way to organize",
          text5: "- Work at the speed of thought.",
          btntext: "Learn More",
          imgUrl: adviceImg2,
          id: 2
        },
        {
          title: "Practice Advice",
          text1: "- The best products start with Figma",
          text2: "- Design with real data",
          text3: "- Lightning fast prototyping",
          text4: "- Fastest way to organize",
          text5: "- Work at the speed of thought.",
          btntext: "Learn More",
          imgUrl: adviceImg3,
          id: 3
        }
      ]
    }
  }
};
</script>
<style></style>
