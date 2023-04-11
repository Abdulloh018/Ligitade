<template>
  <div class="bg-white p-10 rounded-[10px]">
    <img :src="svg" alt="Stars Svg">
    <p class="text-cardTextColor font-bold text-sm my-5">{{ text }}</p>
    <div class="flex gap-x-3">
      <img :src="imgUrl" alt="Client Photo">
      <div class="flex flex-col gap-y-1">
        <p class="text-orangeColor font-bold text-sm">{{ name }}</p>
        <p class="text-textColor font-bold text-sm">{{ job }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClientsCard",
  props: {
    name: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    job: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    svg: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
  
</style>