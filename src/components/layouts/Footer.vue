<template>
  <footer id="footer" class="bg-textColor py-20">
    <div class="container">
      <div class="footer-title flex justify-between pb-16">
        <h2 class="text-2xl">Litigade</h2>
        <div class="flex gap-5">
          <img src="@/assets/svg/Facebook.svg" alt="" />
          <img src="@/assets/svg/Instagram.svg" alt="" />
          <img src="@/assets/svg/Twitter.svg" alt="" />
          <img src="@/assets/svg/Youtube.svg" alt="" />
        </div>
      </div>
      <div class="flex justify-between pt-16">
        <div>
          <p class="text-base text-white mb-5">Company Info</p>
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
          <p class="text-base text-white mb-5">Company Info</p>
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
          <p class="text-base text-white mb-5">Features</p>
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
          <p class="text-base text-white mb-5">Resources</p>
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
            <p class="text-base text-white mb-5">Get In Touch</p>
            <div class="flex rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                class="block px-[18px] border-[#BDBDBD] border-[1px]"
              />
              <button class="w-full bg-orangeColor px-5 text-white py-[15px]">
                Subscribe
              </button>
            </div>
          </form>
        </div>
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
