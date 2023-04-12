<template>
  <nav class="container flex justify-between items-center py-9 px-2 maxWidthsm:px-0">
    <div>
      <p class="text-[24px] ">Ligitade</p>
    </div>
    <ul class="flex items-center hidden md:flex">
      <li class="px-3"><a href="#">Home</a></li>
      <li class="px-3"><a href="#">Product</a></li>
      <li class="px-3"><a href="#">Pricing</a></li>
      <li class="px-3"><a href="#">Contact</a></li>
      <li class="px-3"><a href="#"><img src="@/assets/svg/search.svg" alt=""></a></li>
      <li class="px-3"><a href="#"><img src="@/assets/svg/karzinka.svg" alt=""></a></li>
    </ul>
    <ul class="flex items-center md:hidden">
      <li class="px-3"><a href="#"><img src="@/assets/svg/search.svg" alt=""></a></li>
      <li class="px-3"><a href="#"><img src="@/assets/svg/karzinka.svg" alt=""></a></li>
      <li class="px-3"><a href="#"><img src="@/assets/svg/menu.svg" alt=""></a></li>  
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavbarContent"
}
</script>
<style>
  
</style>