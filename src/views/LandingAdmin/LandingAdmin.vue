
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
        <Spinner v-if="loading" :color="colors.primary" class="h-24" />
        <JobTable v-else-if="jobs.length" :jobs="jobs" />
        <div v-else>No Jobs Available</div>
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
import Nav from '../../components/Nav.vue'
import Footer from '../../components/Footer.vue'
import Socials from '../../components/Socials.vue'
import Spinner from '../../components/Spinner.vue'

import Logo from '../../assets/logo.svg'
import Notification from '../../assets/notification.svg'
import ForEmployers from "../../assets/for_employers.svg"

import { useStore } from "vuex"
import { onMounted, reactive, toRefs } from "vue"
import tailwindTheme from "../../utils/theme"
import JobTable from './Table/JobTable.vue'


const store = useStore()
const state = reactive({ jobs: [], meta: {}, loading: false });

const colors = tailwindTheme.theme.colors

const { jobs, meta, loading } = toRefs(state)

onMounted(async () => {
    state.loading = true
    const { data, ...rest } = await store.dispatch("getMyJobs")
    state.jobs = data
    state.meta = rest.meta
    state.loading = false
});
</script>
