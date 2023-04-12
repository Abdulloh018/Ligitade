<template>
  <footer id="footer" class="bg-textColor">
    <div class="container px-6 maxWidthsm:px-0 py-20">
      <div class="footer-title flex justify-between pb-16">
        <h2 class="text-2xl">Litigade</h2>
        <div class="flex gap-5">
          <img src="@/assets/svg/Facebook.svg" alt="Social Icons" class="cursor-pointer" />
          <img src="@/assets/svg/Instagram.svg" alt="Social Icons" class="cursor-pointer" />
          <img src="@/assets/svg/Twitter.svg" alt="Social Icons" class="cursor-pointer" />
          <img src="@/assets/svg/Youtube.svg" alt="Social Icons" class="cursor-pointer" />
        </div>
      </div>
      <div class="flex flex-col items-start gap-y-10 flex-wrap pt-16 maxWidthScreensm:flex-row maxWidthScreensm:justify-around maxWidthScreensm:gap-x-4 lg:flex-nowrap lg:justify-between lg:gap-x-0 lg:gap-y-0">
        <div>
          <p class="text-base text-white mb-4 maxWidthScreensm:mb-5">Company Info</p>
          <ul class="text-linkColor">
            <li><a href="#" class="text-sm">About Us</a></li>
            <li><a href="#" class="text-sm">Carrier</a></li>
            <li>
              <a href="#" class="text-sm">We are hiring</a>
            </li>
            <li><a href="#" class="text-sm">Blog</a></li>
          </ul>
        </div>
        <div>
          <p class="text-base text-white mb-4 maxWidthScreensm:mb-5">Company Info</p>
          <ul class="text-linkColor">
            <li><a href="#" class="text-sm">About Us</a></li>
            <li><a href="#" class="text-sm">Carrier</a></li>
            <li>
              <a href="#" class="text-sm">We are hiring</a>
            </li>
            <li><a href="#" class="text-sm">Blog</a></li>
          </ul>
        </div>
        <div>
          <p class="text-base text-white mb-4 maxWidthScreensm:mb-5">Features</p>
          <ul class="text-linkColor">
            <li><a href="#" class="text-sm">Business Marketing</a></li>
            <li><a href="#" class="text-sm">User Analytic</a></li>
            <li>
              <a href="#" class="text-sm">Live Chat</a>
            </li>
            <li><a href="#" class="text-sm">Unlimited Support</a></li>
          </ul>
        </div>
        <div>
          <p class="text-base text-white mb-4 maxWidthScreensm:mb-5">Resources</p>
          <ul class="text-linkColor">
            <li><a href="#" class="text-sm">IOS & Android</a></li>
            <li><a href="#" class="text-sm">Watch a Demo</a></li>
            <li>
              <a href="#" class="text-sm">Customers</a>
            </li>
            <li><a href="#" class="text-sm">API</a></li>
          </ul>
        </div>
        <div>
          <form>
            <p class="text-base text-white mb-4 maxWidthScreensm:mb-5">Get In Touch</p>
            <div class="flex rounded-md overflow-hidden mb-1.5">
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                class="block px-[18px] border-[#BDBDBD] border-[1px] text-black w-8/12 sm:w-auto"
              />
              <button class="w-auto bg-orangeColor text-white p-2.5 px-2.5 sm:py-[15px] sm:px-5 sm:w-full">
                Subscribe
              </button>
            </div>
            <p class="text-sm text-linkColor">Lorem impsum dolor amit</p>
          </form>
        </div>
      </div>
    </div>
    <div class="bg-[#0072B5] py-7">
      <div class="container">
        <p class="text-center sm:text-start">Made With Love By Figmaland All Right Reserved</p>
      </div>
    </div>
    </footer>
</template>
<script>
export default {
  name: "FooterContent",
};
</script>
<style scoped>
  .footer-title {
    border-bottom: 1px solid #364067;
  }
</style>
