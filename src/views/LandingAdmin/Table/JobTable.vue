<template>
    <div class="mt-[110px] px-[95px] bg-custom-5 leading-[21.09px] text-lg">
        <div class="flex justify-between items-center">
            <SearchShort class="w-[506px]" />
            <Button
                class="bg-custom-3 px-[28px] py-[12.5px] rounded-[10px] text-white shadow-button flex items-center"
            >
                <Plus class="mr-2" />
                <span class="font-semibold">New Job</span>
            </Button>
        </div>
        <div class="space-y-[8px] mt-10">
            <div
                class="grid grid-cols-9 items-center bg-primary text-white rounded-[10px] h-[65px]"
            >
                <div class></div>
                <div class="col-span-3">Job title</div>
                <div class="col-span-2">Date Modified</div>
                <div>Candidates</div>
                <div></div>
                <div class="flex items-center">
                    Filter
                    <div class="h-[18px] w-[20px] ml-[10px]">
                        <Filter />
                    </div>
                </div>
            </div>
            <div
                :class="['grid grid-cols-9 group items-center h-[65px] shadow-tr rounded-[10px] text-tertiary/70 ']"
                v-for="job in jobs"
                :key="job.id"
                @click="handleRowClick(job)"
            >
                <div class="justify-self-center w-[10px] h-[10px] bg-custom-3 rounded-full"></div>
                <div class="col-span-3 group-hover:text-custom-6">{{ job.title }}</div>
                <div class="col-span-2 group-hover:text-custom-6">
                    {{
                        date.main(job.updated_at)
                    }}
                </div>
                <div
                    class="group-hover:text-custom-6 justify-self-center"
                >{{ job.candidates ?? 50 }}</div>
                <div class="justify-self-center">
                    <Button
                        class="ml-auto block px-[15.5px] py-[8px] rounded-[10px] group-hover:bg-custom-3 group-hover:text-white text-tertiary/70 text-lg"
                    >Edit</Button>
                </div>
                <div class="justify-self-start">
                    <Button
                        class="ml-auto block px-[15.5px] py-[8px] rounded-[10px] group-hover:text-custom-1 group-hover:rounded-none group-hover:border group-hover:border-custom-1 text-tertiary/70 text-lg"
                    >Delete</Button>
                </div>
            </div>
        </div>
        <Pagination :size="7" class="mt-10 mb-[117px]" @click="handlePageClick" />
    </div>
</template>

<script setup>
import { ref } from "vue"

import SearchShort from '../../../components/SearchShort.vue'
import Pagination from '../../../components/Pagination.vue'
import Button from '../../../components/form/Button.vue'
import Plus from '../../../assets/plus.svg'
import Filter from '../../../assets/filter.svg'
import { date } from "../../../utils"

defineProps({ jobs: Object })

const selected = ref()
const handlePageClick = () => {

}

const handleRowClick = (job) => {
    selected.value = job
}

</script>