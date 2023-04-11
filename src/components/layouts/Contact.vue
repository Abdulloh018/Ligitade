<template>
  <section id="contact" class="contact">
    <div class="container py-24 px-6 maxwsm:px-0">
      <div class="w-full md:w-1/2">
        <div class="title-block mb-10">
          <p class="text-2xl leading-none">Contact Us</p>
          <h2 class="text-[40px]">Make an Appointment</h2>
        </div>
        <form>
          <div class="left-sideForm flex gap-y-5 flex-wrap text-black">
            <div class="flex flex-col w-full gap-x-5 gap-y-5 sm:gap-y-0 sm:flex-row">
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full"
              />
              <input
                type="text"
                placeholder="example@gmail.com"
                id="email"
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full"
              />
            </div>
            <div class="flex flex-col w-full gap-x-5 gap-y-5 sm:gap-y-0 sm:flex-row">
              <select
                name=""
                id=""
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full text-[#BDBDBD]"
              >
                <option value="html">Pleace Select</option>
                <option value="css">Select 1</option>
                <option value="js">Select 2</option>
              </select>
              <select
                name=""
                id=""
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full text-[#BDBDBD]"
              >
                <option value="am">Pleace Select</option>
                <option value="pm">Select 1</option>
              </select>
            </div>
            <div class="w-full">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                class="w-full rounded-md px-[18px] py-2.5"
              ></textarea>
            </div>
            <div class="form-btn w-full sm:w-auto">
              <button
                class="w-full bg-orangeColor rounded-md text-white px-10 py-[15px]"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ContactSection",
};
</script>
<style scoped>
.contact {
  background-image: url("@/assets/img/contact-bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
