<template>
    <nav class="bg-primary px-[100px] pt-[30px] relative overflow-x-clip md:px-2">
        <div class="flex justify-between mb-[100px]">
            <slot name="left-content"></slot>
            <slot name="right-content"></slot>
        </div>
        <Circles class="top-[112px]" />
        <slot></slot>
    </nav>
</template>

<script setup>
import Logo from "@/assets/svg/logo.svg"
import Circles from "./Circles.vue"
</script>