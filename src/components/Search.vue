<template>
    <div
        class="py-[17px] px-[24px] bg-white flex items-center justify-between shadow-custom rounded-[10px] h-[80px]"
    >
        <div class="flex flex-1">
            <Search />
            <input
                class="ml-5 focus:outline-none"
                type="text"
                :value="props.modelValue"
                @input="updateValue($event.target.value)"
            />
        </div>
        <slot></slot>
        <Button @click="emit('click')" class="bg-custom-3 px-[28px] py-[12.5px] text-white">Search</Button>
    </div>
</template>

<script setup>
import Search from '../assets/search.svg'
import Button from './form/Button.vue';

const props = defineProps({
    modelValue: String
})


const emit = defineEmits(['update:modelValue', 'click'])
const updateValue = (value) => {
    emit('update:modelValue', value)
}

</script>