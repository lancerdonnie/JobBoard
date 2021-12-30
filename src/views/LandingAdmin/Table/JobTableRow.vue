<template>
    <div
        :class="['grid grid-cols-9 group items-center h-[65px] shadow-tr rounded-[10px] text-tertiary/70 ']"
    >
        <div class="justify-self-center w-[10px] h-[10px] bg-custom-3 rounded-full"></div>
        <div class="col-span-3 group-hover:text-custom-6 group-hover:font-semibold">{{ job.title }}</div>
        <div class="col-span-2 group-hover:text-custom-6 group-hover:font-semibold">
            {{
                date.main(job.updated_at)
            }}
        </div>
        <div
            class="group-hover:text-custom-6 group-hover:font-semibold justify-self-center"
        >{{ job.candidates ?? 50 }}</div>
        <div class="justify-self-center">
            <Button
                class="ml-auto block px-[15.5px] py-[8px] rounded-[10px] group-hover:bg-custom-3 group-hover:text-white text-tertiary/70 text-lg"
                @click="handleEdit"
            >Edit</Button>
        </div>
        <div class="justify-self-start">
            <Button
                class="ml-auto block px-[15.5px] py-[8px] rounded-[10px] group-hover:text-custom-1 group-hover:rounded-none group-hover:border group-hover:border-custom-1 text-tertiary/70 text-lg"
            >Delete</Button>
        </div>
    </div>
    <CreateJob v-if="state.show" @setShow="handleShow" :job="state.job" isEdit />
</template>

<script setup>
import { reactive } from 'vue';
import Button from '../../../components/form/Button.vue'
import { date } from "../../../utils"
import CreateJob from '../CreateJob.vue';


const { job } = defineProps({ job: Object })

const state = reactive({ job, show: false })

const handleShow = () => {
    state.show = !state.show
}

const handleEdit = () => {
    state.job = job
    handleShow()
}

</script>