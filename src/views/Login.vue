<template>
    <div class="flex min-h-screen bg-custom-5">
        <div class="bg-primary flex-1 pl-[82px] pt-[35px]">
            <Logo />
            <ForEmployers class="ml-5" />
            <p
                class="text-[50px] text-white mt-[177px] font-extrabold leading-[61.25px]"
            >Find the best candidates for your organisation</p>
            <img src="../assets/people.png" alt />
        </div>
        <div
            class="relative p-[20px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:z-[1] after:origin-[100%_0] after:skew-x-[-3deg]"
        />
        <div class="relative w-[40px] bg-custom-4 skew-x-[-5deg] z-[2] origin-[100%_0]" />
        <form
            @submit.prevent="login"
            class="px-12 flex flex-col items-center justify-center flex-1 bg-custom-5 text-primary relative overflow-hidden"
        >
            <Circles class="top-[91.44px]" />
            <p
                class="mt-40 text-[32px] text-primary mb-[43px] self-start font-extrabold tracking-[0.12em]"
            >Login</p>
            <div class="w-full">
                <label class="mb-13 text-[18px] tracking-[0.12em]">Email</label>
                <input
                    class="block bg-white rounded-[10px] border-primary border-[0.5px] w-full text-[18px] p-[23px]"
                    type="text"
                    v-model="email"
                />
            </div>
            <div class="w-full mt-[42px]">
                <label class="mb-13 text-[18px] tracking-[0.12em]">Password</label>
                <input
                    class="block bg-white rounded-[10px] border-primary border-[0.5px] w-full text-[18px] p-[23px]"
                    type="text"
                    v-model="password"
                />
            </div>
            <div class="mt-[40px] self-start">
                <button
                    type="submit"
                    class="bg-primary font-extrabold px-[62.5px] py-[23px] rounded-[10px] text-white text-[18px] leading-[22px] tracking-[0.12em]"
                >{{ loading ? "loading" : "Login" }}</button>
            </div>
        </form>
    </div>
</template>




<script setup>
// export default {
//   components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
//   props: {
//     user: {
//       type: String,
//       required: true
//     }
//   },
//   setup(props) {
//     console.log(props) // { user: '' }

//     return {} // anything returned here will be available for the rest of the component
//   }
//   // the "rest" of the component
// }
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

import ForEmployers from "../assets/for_employers.svg"
import Logo from "../assets/logo.svg"
import Circles from "../components/Circles.vue"

const email = ref("")
const password = ref("")
const loading = ref(false)

const store = useStore()
const router = useRouter()

const login = async () => {
    loading.value = true
    const token = await store.dispatch("login", {
        email: email.value,
        password: password.value
    })
    loading.value = false
    if (token) router.push("/")
}


</script>