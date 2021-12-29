<template>
    <div
        class="fixed inset-0 z-20 flex justify-center h-screen items-center bg-gray-200/70 antialiased py-3"
        @click="handleClick"
    >
        <div
            class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl h-full bg-custom-5"
        >
            <div class="flex justify-end p-6 rounded-tl-lg rounded-tr-lg">
                <i @click="emit('setShow')" class="cursor-pointer">
                    <Close />
                </i>
            </div>
            <div class="overflow-auto">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import Close from "../assets/close.svg"

const emit = defineEmits(['setShow'])

const handleClick = (e) => {
    if (e.currentTarget !== e.target) return
    emit("setShow")
}

</script>