<template>
  <div class="bg-white">
    <img :src="imgUrl" alt="Attorneys Photo">
    <div class="flex flex-col items-center py-8">
      <p class="text-textColor text-base font-bold mb-1.5">{{ name }}</p>
      <p class="text-cardTextColor font-bold text-sm mb-2">{{ job }}</p>
      <div class="flex gap-x-2">
        <img src="@/assets/svg/attorneyFacebook.svg" alt="">
        <img src="@/assets/svg/attorneyInstagram.svg" alt="">
        <img src="@/assets/svg/attorneyTwitter.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AttorneysCard",
  props: {
    name: {
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
    }
  }
}
</script>
<style>
  
</style>