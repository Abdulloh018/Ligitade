<template>
  <section id="contact" class="contact">
    <div class="container py-24 px-6 maxWidthsm:px-0">
      <div class="w-full md:w-1/2">
        <div class="title-block mb-10">
          <p class="text-2xl leading-none">Contact Us</p>
          <h2 class="text-[40px]">Make an Appointment</h2>
        </div>
        <form class="text-black">
          <div class="flex items-stretch gap-5 mb-5">
            <div class="w-1/2">
              <input
                v-model="v$.name.$model"
                type="text"
                placeholder="Full Name"
                id="name"
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full"
              />
              <div>
                <p v-if="v$.name.$dirty && v$.name.required.$invalid" class="text-rose-600">this is a required field</p>
              </div>
            </div>
            <div class="w-1/2">
              <input
                v-model="v$.email.$model"
                type="email"
                placeholder="example@gmail.com"
                id="email"
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full"
              />
              <div>
                <p v-if="v$.email.$dirty && v$.email.required.$invalid" class="text-rose-600">this is a required field</p>
                <p v-else-if="v$.email.$dirty && v$.email.email.$invalid" class="text-rose-600">This field must contain @</p>
              </div>
            </div>
          </div>
          <div class="flex items-stretch gap-5 mb-5">
            <div class="w-1/2 flex flex-col">
              <input
                v-model="v$.phone.$model" 
                type="text"
                placeholder="Phone Number"
                id="number"
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full"
              />
              <div v-if="v$.phone.$dirty">
                <p v-if="v$.phone.required.$invalid" class="text-rose-600">this is a required field</p>
                <p v-else-if="v$.phone.minLength.$invalid && v$.phone.maxLength.$invalid" class="text-rose-600">This field's length must 12</p>
              </div>
            </div>
            <div class="w-1/2 flex flex-col">
              <select
                v-model="v$.select.$model"
                name=""
                id=""
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full text-[#BDBDBD]"
              >
                <option value="" disabled selected hidden>Please select</option>
                <option value="am">Select 1</option>
                <option value="pm">Select 2</option>
              </select>
              <div v-if="v$.select.$dirty">
                <p v-if="v$.select.required.$invalid" class="text-rose-600">this is a required field</p>
              </div>
            </div>
          </div>
          <div>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              class="w-full rounded-md px-[18px] py-2.5 resize-none focus:outline-none"
            ></textarea>
          </div>
          <div class="form-btn w-full sm:w-auto">
              <button type="submit" @click.prevent="submitForm"
                class="w-full bg-orangeColor rounded-md text-white px-10 py-[15px]"
              >
                Book Appointment
              </button>
            </div>
        </form>
          <!-- <div class="left-sideForm flex gap-y-5 flex-wrap text-black">
            <div
              class="flex flex-col w-full gap-x-5 gap-y-5 sm:gap-y-0 sm:flex-row"
            >
            <div>
              <input
                v-model="v$.name.$model"
                type="text"
                placeholder="Full Name"
                id="name"
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full"
                required
              />
              
            </div>
            <div>
              <input
                v-model="v$.email.$model"
                type="email"
                placeholder="example@gmail.com"
                id="email"
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full"
                required
              />
              <p></p>
            </div>
            </div>
            <div
              class="flex flex-col w-full gap-x-5 gap-y-5 sm:gap-y-0 sm:flex-row"
            >
            <div>
              <input
                v-model="v$.phone.$model" 
                type="text"
                placeholder="Phone Number"
                id="number"
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full"
                required
              />
              <p></p>
            </div>
              <div>
                <select
                v-model="v$.select.$model"
                name=""
                id=""
                class="block px-[18px] py-2.5 rounded-md border-[#BDBDBD] border-[1px] w-full text-[#BDBDBD]"
              >
                <option value="am">Pleace Select</option>
                <option value="pm">Select 1</option>
              </select>
              <p></p>
              </div>
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
              <button type="submit" @click="submitForm"
                class="w-full bg-orangeColor rounded-md text-white px-10 py-[15px]"
              >
                Book Appointment
              </button>
            </div>
          </div> -->
      </div>
    </div>
  </section>
</template>
<script>
import useValidate from "@vuelidate/core"
import { required, email, minLength, maxLength } from "@vuelidate/validators"

export default {
  name: "ContactSection",
  data() {
    return {
      v$: useValidate(),
      name: '',
      email: '',
      phone: '',
      select: ''
    }
  },
  validations () {
    return {
      name: { required },
      email: { required, email },
      phone: { required, minLength: minLength(12), maxLength: maxLength(12) },
      select: { required }
    }
  },
  methods: {
    submitForm() {
      this.v$.$touch()
    }
  }
};
</script>
<style scoped>
.contact {
  background-image: url("@/assets/img/contact-bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

/* input {
  border: 3px solid white;
  transition: all 0.3s;
}

input:focus {
  outline: none;
  border: 3px solid  #7ed56f;
}

input:focus:invalid {
  border: 3px solid  #ff7730;
} */

</style>
