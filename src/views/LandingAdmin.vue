
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
            <p class="text-white text-[40px] pl-4 pb-[72px]">Jobs</p>
        </template>
    </Nav>
</template>    



<script setup>
import Nav from '../components/Nav.vue'
</script>
