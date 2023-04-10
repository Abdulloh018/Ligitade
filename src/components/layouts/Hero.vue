<template>
  <section id="hero">
    <div class="container flex flex-col justify-between items-center md:flex-row">
      <div class="w-full mt-[100px] md:mt-0 md:w-1/2">
        <h1 class="text-5xl mb-9 font-bold leading-[65px] text-center mdb:text-start md:text-[58px]">LEGAL PRO SERVICES</h1>
        <p class="hero-text text-xl mb-9 w-[345px] mx-auto md:mx-0">
          We know how large objects will act, but things on a small scale.
        </p>
        <div class="hero-btns">
          <button class="bg-btnColor py-3 px-9 rounded-full border-[#D0A144] border-[1px] mdb:mr-[10px]">Get Quote Now</button>
          <button class="py-3 px-9 rounded-full border-inherit border-[1px]">Learn More</button>
        </div>
      </div>
      <div class="flex justify-center w-full mt-[100px] mb-[50px] md:w-1/2 md:justify-end">
        <form class="p-10 bg-white text-textColor rounded-[10px]">
          <div class="form-title mb-10">
            <h4 class="text-[24px] font-bold">Book Appointment</h4>
          </div>
          <div class="form-group flex flex-col gap-[10px] mb-10">
            <label for="name" class="block">Name</label>
            <input type="text" placeholder="Full Name" id="name" class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px]" />
            <label for="email" class="block">Email</label>
            <input type="text" placeholder="example@gmail.com" id="email" class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px]"/>
            <label for="" class="block">Department</label>
            <select name="" id="" class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px]">
              <option value="html">Pleace Select</option>
              <option value="css"></option>
              <option value="js"></option>
            </select>
            <label for="" class="block">Time</label>
            <select name="" id="" class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px]">
              <option value="am">Pleace Select</option>
              <option value="pm"></option>
            </select>
          </div>
          <div class="form-btn">
            <button class="w-full bg-[#295C7A] rounded-md text-white py-[15px]">Book Appointment</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HeroSection",
};
</script>
<style></style>
