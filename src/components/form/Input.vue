<template>
    <div class="w-full">
        <label
            class="mb-13 text-lg tracking-[0.12em] leading-[21px] text-primary font-semibold"
        >{{ label }}</label>
        <input
            class="block bg-white rounded-[10px] border-primary border-[0.5px] w-full text-[18px] p-[23px]"
            type="text"
        />
    </div>
</template>


<script setup>

defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>