<template>
  <section id="advice" class="bg-[#252B42]">
    <div class="container">
      <div class="section-title text-center px-[330px] py-20">
        <h2 class="text-[40px] mb-[10px]">Practice Advice</h2>
        <p class="text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <AdviceCard />
    </div>
  </section>
</template>
<script>
import AdviceCard from "@/components/Blocks/AdviceCard.vue";
export default {
  name: "AdviceContent",
  components: {
    AdviceCard,
  },
};
</script>
<style></style>
