<template>
    <div
        class="py-[17px] px-[24px] bg-white flex items-center justify-between shadow-custom rounded-[10px] h-[80px]"
    >
        <div class="flex flex-1">
            <Search />
            <span class="ml-5">front end developer</span>
        </div>
        <Button class="bg-custom-3 px-[28px] py-[12.5px] text-white">Search</Button>
    </div>
</template>

<script setup>
import Search from '../assets/search.svg'
import Button from './form/Button.vue';

</script>