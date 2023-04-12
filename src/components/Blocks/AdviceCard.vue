<template>
    <div class="bg-[#F6E4D7] rounded-[10px]">
    <div class="flex items-center gap-[20px] px-6 py-8 maxWidthsm:px-10 lg:px-12 ">
      <img :src="imgUrl" alt="" />
      <p class="text-textColor">{{ title }}</p>
    </div>
    <div class="px-6 py-8 bg-white rounded-[10px] maxWidthsm:px-10 lg:px-12">
      <p class="text-cardTextColor">{{ text1 }}</p>
      <p class="text-cardTextColor">{{ text2 }}</p>
      <p class="text-cardTextColor">{{ text3 }}</p>
      <p class="text-cardTextColor">{{ text4 }}</p>
      <p class="text-cardTextColor mb-3">{{ text5 }}</p>
      <a href="#" class="text-orangeColor">{{ btntext }}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdviceCard",
  props: {
    title: {
      type: String,
      default: ''
    },
    text1: {
      type: String,
      default: ''
    },
    text2: {
      type: String,
      default: ''
    },
    text3: {
      type: String,
      default: ''
    },
    text4: {
      type: String,
      default: ''
    },
    text5: {
      type: String,
      default: ''
    },
    btntext: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    },
  }
};
</script>
<style></style>
