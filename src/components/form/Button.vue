<template>
    <button class="flex justify-center items-center rounded-[10px] text-white text-[14px]">
        <Spinner v-if="loading" :size="spinnerSize" :color="spinnerColor" />
        <slot v-else></slot>
    </button>
</template>

<script setup>
import Spinner from '../Spinner.vue';

defineProps({
    loading: {
        type: Boolean,
        default: false
    }, spinnerSize: {
        type: String,
        default: 'small'
    }, spinnerColor: String
})
</script>