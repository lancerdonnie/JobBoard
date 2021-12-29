
<template>
    <div class="flex h-full w-full justify-center items-center">
        <div v-if="size === 'small'" class="lds-ring w-4 h-4">
            <div v-for="_ in Array.from({ length: 4 })" class="w-4 h-4 border-2"></div>
        </div>
        <div v-else-if="size === 'medium'" class="lds-ring w-8 h-8">
            <div v-for="_ in Array.from({ length: 4 })" class="w-8 h-8 border-4"></div>
        </div>
        <div v-else class="lds-ring w-16 h-16">
            <div v-for="_ in Array.from({ length: 4 })" class="w-16 h-16 border-8"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    size: String,
    color: {
        type: String,
        default: "#fff"
    }
})
</script>

<style scoped>
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.lds-ring {
    display: inline-block;
    position: relative;
}
.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    border-style: solid;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    /* border-color: #fff transparent transparent transparent; */
    border-color: v-bind(color) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}
</style>