<template>
    <div class="w-full">
        <label
            class="mb-13 text-lg tracking-[0.12em] leading-[21px] text-primary font-semibold"
        >{{ label }}</label>
        <input
            class="block bg-white rounded-[10px] border-primary border-[0.5px] w-full text-lg p-[23px]"
            :value="props.modelValue"
            @input="updateValue($event.target.value)"
            :type="type"
        />
    </div>
</template>


<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    modelValue: String,
    type: String
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
    emit('update:modelValue', value)
}
</script>