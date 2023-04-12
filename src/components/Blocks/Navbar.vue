<template>
  <nav class="flex justify-between items-center py-9 px-2 maxWidthsm:px-0">
    <div class="container flex justify-between items-center">
      <div>
      <p class="text-[24px] ">Ligitade</p>
    </div>
    <ul class="flex items-center hidden md:flex">
      <li class="px-3"><a href="#"><router-link to="/">Home</router-link></a></li>
      <li class="px-3"><a href="#">Product</a></li>
      <li class="px-3"><a href="#">Pricing</a></li>
      <li class="px-3"><a href="#"><router-link to="/contact">Contact</router-link></a></li>
      <li class="px-3"><a href="#"><img src="@/assets/svg/search.svg" alt=""></a></li>
      <li class="px-3"><a href="#"><img src="@/assets/svg/karzinka.svg" alt=""></a></li>
    </ul>
    <ul class="flex items-center md:hidden">
      <li class="px-3"><a href="#"><img src="@/assets/svg/search.svg" alt=""></a></li>
      <li class="px-3"><a href="#"><img src="@/assets/svg/karzinka.svg" alt=""></a></li>
      <li class="px-3"><a href="#"><img src="@/assets/svg/menu.svg" alt=""></a></li>  
    </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavbarContent"
}
</script>
<style>
  
</style>