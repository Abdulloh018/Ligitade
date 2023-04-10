<template>
    <div class="bg-[#F6E4D7] rounded-[10px]">
    <div class="flex items-center gap-[20px] px-[50px] py-[30px]">
      <img :src="imgUrl" alt="" />
      <p class="text-textColor">{{ title }}</p>
    </div>
    <div class="px-[50px] py-[30px] bg-white rounded-[10px]">
      <p class="text-cardTextColor">{{ text1 }}</p>
      <p class="text-cardTextColor">{{ text2 }}</p>
      <p class="text-cardTextColor">{{ text3 }}</p>
      <p class="text-cardTextColor">{{ text4 }}</p>
      <p class="text-cardTextColor">{{ text5 }}</p>
      <a href="#" class="text-btnColor">{{ btntext }}</a>
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
