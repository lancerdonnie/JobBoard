
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
                <p
                    class="text-white text-[40px] pl-4 pb-[72px] font-semibold tracking-[0.12em] leading-[47px]"
                >Jobs</p>
            </template>
        </Nav>
        <div class="mt-[110px] px-[95px] bg-custom-5 leading-[21.09px] text-lg">
            <div class="flex justify-between items-center">
                <Search class="w-[506px]" v-model="search" @click="handleSearch" />
                <Button
                    class="bg-custom-3 px-[28px] py-[12.5px] rounded-[10px] text-white shadow-button flex items-center"
                    @click="handleShow"
                >
                    <Plus class="mr-2" />
                    <span class="font-semibold">New Job</span>
                </Button>
            </div>
            <Spinner v-if="loading" :color="colors.primary" class="h-24" />
            <JobTable v-else-if="jobs.length" :jobs="jobs" />
            <div v-else>No Jobs Available</div>
        </div>
        <Footer class="flex text-white text-lg">
            <div class="flex-1 flex justify-between items-center">
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
    <CreateJob v-if="show" @setShow="handleShow" />
</template>    



<script setup>
import Nav from '../../components/Nav.vue'
import Footer from '../../components/Footer.vue'
import Socials from '../../components/Socials.vue'
import Spinner from '../../components/Spinner.vue'
import Search from '../../components/Search.vue'
import JobTable from './Table/JobTable.vue'
import CreateJob from './CreateJob.vue'
import Button from '../../components/form/Button.vue'

import Plus from '../../assets/svg/plus.svg'
import Logo from '../../assets/svg/logo.svg'
import Notification from '../../assets/svg/notification.svg'
import ForEmployers from "../../assets/svg/for_employers.svg"

import { useStore } from "vuex"
import { onMounted, reactive, toRefs, ref } from "vue"
import tailwindTheme from "../../utils/theme"


const store = useStore()
const state = reactive({ jobs: [], meta: {}, loading: false });
const show = ref(false)
const search = ref("")

const colors = tailwindTheme.theme.colors

const { jobs, meta, loading } = toRefs(state)

const handleShow = () => {
    show.value = !show.value
}

const handleSearch = () => {
    console.log(search.value)
}

onMounted(async () => {
    state.loading = true
    const { data, ...rest } = await store.dispatch("getMyJobs")
    state.jobs = data
    state.meta = rest.meta
    state.loading = false
});
</script>
