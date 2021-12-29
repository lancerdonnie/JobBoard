<template>
    <div
        class="py-[17px] px-[24px] bg-white flex items-center justify-between shadow-custom rounded-[10px] h-[80px]"
    >
        <div class="flex flex-1">
            <Search />
            <span class="ml-5">front end developer</span>
        </div>
        <div class="h-full flex flex-1 justify-between">
            <div class="h-full flex items-center">
                <div class="h-full w-[1.5px] bg-custom-1" />
                <div class="flex ml-5">
                    <Pointer />
                    <span class="ml-5">Lagos, Nigeria</span>
                </div>
            </div>
            <Button class="bg-custom-3 px-[28px] py-[12.5px]">Search</Button>
        </div>
    </div>
</template>

<script setup>
import Search from '../assets/search.svg'
import Pointer from '../assets/pointer.svg'
import Button from './form/Button.vue';

</script>