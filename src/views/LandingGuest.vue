
<template>
    <Nav>
        <template v-slot:right-content>
            <ul class="flex items-center text-white text-lg">
                <li class="mr-[30px] cursor-pointer">Jobs</li>
                <li class="mr-[30px] cursor-pointer opacity-60">Company Review</li>
                <li class="mr-[17.5px] cursor-pointer opacity-60">Find Salaries</li>
                <li
                    class="rounded-md cursor-pointer text-base font-extrabold p-[10px] bg-white text-primary"
                >Post Job</li>
            </ul>
        </template>

        <template v-slot:default>
            <p class="text-white text-[40px] pl-4 pb-[129px]">Find Your Dream Job</p>
        </template>
    </Nav>
    <Search class="relative mt-[-30px] mx-28 z-10" />
    <div class="mt-[110px] px-[95px]">
        <div>
            <span>showing 68 results</span>
        </div>
    </div>
    <Footer class="flex text-white">
        <div class="flex-1 flex justify-between">
            <div>
                <Logo />
                <p>
                    © 2021
                    <span>FindJobs</span>
                </p>
            </div>
            <div>
                <p>Quick Links</p>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Calendar</li>
                    <li>Terms and condition</li>
                </ul>
            </div>
        </div>
        <div class="flex-1 flex justify-between">
            <div>
                <p>Quick Links</p>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Calendar</li>
                    <li>Terms and condition</li>
                </ul>
            </div>
            <div>
                <p>Social Media</p>
                <Socials />
            </div>
        </div>
    </Footer>
</template>    



<script setup>
import { useStore } from "vuex"

import Nav from '../components/Nav.vue'
import Search from '../components/Search.vue'
import Footer from '../components/Footer.vue'
import Socials from '../components/Socials.vue'
import Logo from '../assets/logo.svg'

const store = useStore()

const result = await store.dispatch("getJobs")

console.log(result)

</script>
