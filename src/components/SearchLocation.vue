<template>
    <Search>
        <div class="h-full flex flex-1 justify-between">
            <div class="h-full flex items-center">
                <div class="h-full w-[1.5px] bg-custom-1" />
                <div class="flex ml-5">
                    <Pointer />
                    <span class="ml-5">Lagos, Nigeria</span>
                </div>
            </div>
        </div>
    </Search>
</template>

<script setup>
import Pointer from '../assets/pointer.svg'
import Search from './Search.vue';
</script>