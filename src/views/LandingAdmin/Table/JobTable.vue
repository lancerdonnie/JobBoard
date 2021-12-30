<template>
    <div class="space-y-[8px] mt-10">
        <div class="grid grid-cols-9 items-center bg-primary text-white rounded-[10px] h-[65px]">
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
        <JobTableRow v-for="job in jobs" :key="job.id" :job="job" />
    </div>
    <Pagination :size="7" class="mt-10 mb-[117px] md:ml-2" @click="handlePageClick" />
</template>

<script setup>
import Pagination from '../../../components/Pagination.vue'
import Filter from "@/assets/svg/filter.svg"
import JobTableRow from "./JobTableRow.vue"

defineProps({ jobs: Object })

const handlePageClick = () => {

}


</script>