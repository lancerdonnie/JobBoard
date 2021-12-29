<template>
    <div class="shadow-details rounded-[10px] tracking-[0.12em]">
        <div class="p-[37px]">
            <div class="font-semibold leading-[28px] text-2xl text-primary">{{ details.title }}</div>
            <div class="mt-2 text-lg leading-[21px] flex items-end">
                <Pointer class="mr-1" />
                {{ details.location }}
            </div>
            <Button
                class="bg-primary px-[36px] py-[10px] text-white text-[14px] mt-9"
                @click="emit('click')"
            >Apply Via Find Job</Button>
        </div>
        <div class="h-[0.8px] bg-custom-3 w-full" />
        <div class="p-[37px] text-sm">{{ details.description }}</div>
    </div>
</template>


<script setup>
import Button from '../../components/form/Button.vue';
import Pointer from "../../assets/pointer.svg"

defineProps({
    details: {
        type: Object,
        required: true
    },
    selected: Boolean
})



const emit = defineEmits(['click'])
</script>