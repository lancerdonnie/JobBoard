
<template>
    <div class="bg-custom-5">
        <Nav>
            <template v-slot:left-content>
                <div>
                    <Logo />
                    <ForEmployers class="ml-5" />
                </div>
            </template>
            <template v-slot:right-content>
                <div class="flex items-center text-white text-lg">
                    <Notification />
                    <img
                        class="rounded-full h-[50px] w-[50px] ml-[17px]"
                        src="https://ui-avatars.com/api/?name=Jide Adedeji"
                        alt
                    />
                </div>
            </template>

            <template v-slot:default>
                <p class="text-white text-[40px] pl-4 pb-[72px]">Jobs</p>
            </template>
        </Nav>
        <div v-if="jobs.length" class="mt-[110px] px-[95px] bg-custom-5">
            <div class="flex justify-between items-center">
                <SearchShort class="w-[506px]" />
                <button
                    class="bg-custom-3 px-[28px] py-[12.5px] rounded-[10px] text-white shadow-button flex items-center"
                >
                    <Plus />New Job
                </button>
            </div>
            <div class="text-[18px] space-y-[8px] mt-10">
                <div
                    class="grid grid-cols-9 items-center bg-primary text-white rounded-[10px] h-[65px]"
                >
                    <div class></div>
                    <div class="col-span-4">Job title</div>
                    <div>Date Modified</div>
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
                    class="grid grid-cols-9 items-center h-[65px] shadow-tr rounded-[10px]"
                    v-for="job in jobs"
                    :key="job.id"
                >
                    <div class="justify-self-center w-[10px] h-[10px] bg-custom-3 rounded-full"></div>
                    <div class="col-span-4">{{ job.title }}</div>
                    <div>
                        {{
                            date.main(job.updated_at)
                        }}
                    </div>
                    <div>{{ job.candidates ?? 50 }}</div>
                    <div>
                        <button
                            class="ml-auto block bg-custom-3 px-[15.5px] py-[8px] rounded-[10px] text-white text-[14px]"
                        >Edit</button>
                    </div>
                    <div>
                        <button
                            class="ml-auto block bg-custom-3 px-[15.5px] py-[8px] rounded-[10px] text-white text-[14px]"
                        >Delete</button>
                    </div>
                </div>
            </div>
            <Pagination size="7" class="mt-10 mb-[117px]" @click="handlePageClick" />
        </div>
        <Footer class="flex text-white">
            <div class="flex-1 flex justify-between">
                <Logo />
                <p>
                    © 2021
                    <span class="font-mont text-custom-1 ml-1">FindJobs</span>
                </p>
                <p class="ml-[35px]">Terms and condition</p>
            </div>
            <div class="flex-1 flex justify-end">
                <Socials />
            </div>
        </Footer>
    </div>
</template>    



<script setup>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Socials from '../components/Socials.vue'
import SearchShort from '../components/SearchShort.vue'
import Pagination from '../components/Pagination.vue'
import Logo from '../assets/logo.svg'
import Plus from '../assets/plus.svg'
import Filter from '../assets/filter.svg'
import Notification from '../assets/notification.svg'
import ForEmployers from "../assets/for_employers.svg"

import { useStore } from "vuex"
import { onMounted, reactive, ref, toRefs } from "vue"
import { date } from "../utils"


const store = useStore()
const state = reactive({ jobs: [], meta: {} });

const { jobs, meta } = toRefs(state)
// const details = ref()

const handlePageClick = () => {

}

onMounted(async () => {
    const { data, ...rest } = await store.dispatch("getMyJobs")
    state.jobs = data
    state.meta = rest.meta
});
</script>
