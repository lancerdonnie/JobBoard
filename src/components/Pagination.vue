<template>
    <ul class="flex gap-3">
        <li
            class="text-[14px] h-[37px] w-[36px] rounded flex items-center justify-center border-primary border-[0.2px] border-solid cursor-pointer"
            v-if="size > maxSize && offset > 0"
            @click="offset = offset - 1"
        >
            <AngleL />
        </li>
        <li
            class="text-[14px] h-[37px] w-[36px] rounded flex items-center justify-center border-primary border-[0.2px] border-solid cursor-pointer"
            :class="{ 'bg-primary text-white': selected === (index + 1 + offset), 'text-primary': !selected }"
            v-for="(_,index) in Array.from({ length: size > maxSize ? maxSize : size })"
            :key="index"
            @click="setSelected(index + 1 + offset)"
        >{{ index + 1 + offset }}</li>

        <li
            class="text-[14px] h-[37px] w-[36px] rounded flex items-center justify-center border-primary border-[0.2px] border-solid cursor-pointer"
            v-if="size > maxSize && offset < (size - maxSize)"
            @click="offset = offset + 1"
        >
            <AngleR />
        </li>
    </ul>
</template>

<script setup>
import { defineEmits, ref } from "vue"
import AngleR from "../assets/angle_r.svg"
import AngleL from "../assets/angle_l.svg"

const selected = ref(1)
const offset = ref(0)
const maxSize = 5

defineProps({
    size: Number
})

const emit = defineEmits(['click'])

const setSelected = (index) => {
    selected.value = index
    emit('click', index)
}

</script>