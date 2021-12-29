<template>
    <div class="w-full">
        <label
            class="mb-13 text-lg tracking-[0.12em] leading-[21px] text-primary font-semibold"
        >{{ label }}</label>
        <select
            class="block bg-white rounded-[10px] border-primary border-[0.5px] w-full text-tertiary/80 text-[18px] p-[23px]"
            :value="props.modelValue"
            @change="updateValue($event.target.value)"
        >
            <option value>Select Option</option>
            <slot></slot>
        </select>
    </div>
</template>


<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    }, modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
    emit('update:modelValue', value)
}
</script>