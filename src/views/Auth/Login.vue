<template>
    <div class="flex min-h-screen bg-custom-5">
        <div class="bg-primary flex-1 pl-[82px] pt-[35px]">
            <Logo />
            <ForEmployers class="ml-5" />
            <p
                class="text-[50px] text-white mt-[177px] font-extrabold leading-[61.25px]"
            >Find the best candidates for your organisation</p>
            <img src="../../assets/people.png" alt />
        </div>
        <div
            class="relative p-[20px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:z-[3] after:origin-[100%_0] after:skew-x-[-3deg]"
        />
        <div class="relative w-[40px] bg-custom-4 skew-x-[-5deg] z-[2] origin-[100%_0]" />
        <form
            @submit.prevent="login"
            class="px-12 my-8 flex flex-col items-center justify-center flex-1 bg-custom-5 text-primary relative overflow-hidden"
        >
            <Circles class="top-[91.44px]" />
            <p
                class="mt-40 text-[32px] text-primary mb-[43px] self-start font-extrabold tracking-[0.12em]"
            >Login</p>
            <Input class="w-full mt-[42px]" v-model="email" label="Email" />
            <Input class="w-full mt-[42px]" v-model="password" label="Password" type="password" />
            <div class="mt-[40px] self-start flex items-center gap-4">
                <Button
                    type="submit"
                    class="bg-primary font-extrabold px-[62.5px] py-[23px] text-white text-lg leading-[22px] tracking-[0.12em]"
                    :loading="loading"
                >Login</Button>
                <span class="text-primary mt-2">
                    <router-link to="/register">register</router-link>
                </span>
            </div>
        </form>
    </div>
</template>




<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

import Circles from "../../components/Circles.vue"

import ForEmployers from "@/assets/svg/for_employers.svg"
import Logo from "@/assets/svg/logo.svg"
import Button from "../../components/form/Button.vue"
import Input from "../../components/form/Input.vue"

const email = ref("")
const password = ref("")
const loading = ref(false)

const store = useStore()
const router = useRouter()

const login = async () => {
    loading.value = true
    const res = await store.dispatch("login", {
        email: email.value,
        password: password.value
    })
    if (res) {
        router.push("/myjobs")
    }
    loading.value = false
}


</script>