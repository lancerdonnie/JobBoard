<template>
    <div
        :class="['p-8 shadow-card mb-[35px] rounded-[10px] tracking-[0.08em]', selected ? ['bg-primary', 'text-white'] : ['text-tertiary']]"
    >
        <div
            :class="['flex justify-between font-semibold leading-[28px] text-2xl', !selected && 'text-primary']"
        >
            <span>{{ job.title }}</span>
            <span>{{ job.salary }}</span>
        </div>
        <div class="mt-2 text-lg leading-[21px] flex items-end">
            <Pointer class="mr-1" />
            {{ job.location }}
        </div>
        <div class="mt-[18px] text-sm leading-[16px]">{{ job.description }}</div>
        <Button
            :class="['ml-auto block px-[15.5px] py-[8px] rounded-[10px] text-white text-[14px] mt-4 leading-[16px] font-semibold',
                selected ? ['bg-white', 'text-custom-3'] : 'bg-custom-3',
            
            ]"
            @click="emit('click')"
        >see more</Button>
    </div>
</template>

<script setup>
import Button from '../../components/form/Button.vue';
import Pointer from "../../assets/svg/pointer.svg"

defineProps({
    job: {
        type: Object,
        required: true
    },
    selected: Boolean
})



const emit = defineEmits(['click'])
</script>