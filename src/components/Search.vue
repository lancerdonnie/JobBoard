<template>
    <form
        class="py-[17px] px-[24px] bg-white flex items-center justify-between shadow-custom rounded-[10px] h-[80px]"
        @submit.prevent="emit('click')"
    >
        <div class="flex flex-1">
            <Search />
            <input
                class="ml-5 focus:outline-none"
                type="text"
                :value="modelValue"
                @input="updateValue($event.target.value)"
            />
        </div>
        <slot></slot>
        <Button
            class="bg-custom-3 px-[28px] py-[12.5px] text-white"
            :loading="loading"
            type="submit"
        >Search</Button>
    </form>
</template>

<script setup>
import Search from "@/assets/svg/search.svg'
import Button from './form/Button.vue';

defineProps({
    modelValue: String,
    loading: Boolean
})


const emit = defineEmits(['update:modelValue', 'click'])
const updateValue = (value) => {
    emit('update:modelValue', value)
}

</script>