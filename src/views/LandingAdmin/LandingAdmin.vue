
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
                    <Notification class="cursor-pointer" />
                    <img
                        class="rounded-full h-[50px] w-[50px] mx-[17px] cursor-pointer"
                        :src="avatar"
                        alt="profile_picture"
                    />
                    <Logout class="cursor-pointer" @click="logout" />
                </div>
            </template>

            <template v-slot:default>
                <p
                    class="text-white text-[40px] pl-4 pb-[72px] font-semibold tracking-[0.12em] leading-[47px]"
                >Jobs</p>
            </template>
        </Nav>
        <div class="mt-[110px] px-[95px] bg-custom-5 leading-[21.09px] text-lg md:px-2">
            <div class="flex justify-between items-center md:flex-col">
                <Search
                    class="w-[506px]"
                    v-model="search"
                    @click="handleSearch"
                    :loading="searchLoading"
                />
                <Button
                    class="bg-custom-3 px-[28px] py-[12.5px] rounded-[10px] text-white shadow-button flex items-center md:mt-2"
                    @click="handleShow"
                >
                    <Plus class="mr-2" />
                    <span class="font-semibold">New Job</span>
                </Button>
            </div>
            <Spinner v-if="loading" :color="colors.primary" class="h-24" />
            <JobTable v-else-if="jobs.data.length" :jobs="jobs.data" />
            <div
                class="flex justify-center items-center h-40 font-semibold text-primary"
                v-else
            >No Jobs Available</div>
        </div>
        <Footer class="flex text-white text-lg md:flex-col">
            <div class="flex-1 flex justify-between items-center md:flex-col">
                <Logo />
                <p class="md:mt-4">
                    © 2021
                    <span class="font-mont text-custom-1 ml-1">FindJobs</span>
                </p>
                <p class="ml-[35px] md:ml-0">Terms and condition</p>
            </div>
            <div class="flex-1 flex justify-end md:justify-center md:mt-4">
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

import Plus from '@/assets/svg/plus.svg'
import Logo from '@/assets/svg/logo.svg'
import Notification from '@/assets/svg/notification.svg'
import ForEmployers from '@/assets/svg/for_employers.svg'
import Logout from '@/assets/svg/logout.svg'

import { onMounted, reactive, toRefs, computed } from "vue"
import { useStore } from "vuex"
import tailwindTheme from "../../utils/theme"
import { useRouter } from 'vue-router'

const colors = tailwindTheme.theme.colors
const store = useStore()
const router = useRouter()
const avatar = store.state.user.avatar
const state = reactive({ loading: false, searchLoading: false, show: false, search: "" });
const { loading, searchLoading, show, search } = toRefs(state)
const jobs = computed(() => store.state.myJobs)

const getJobs = async (params) => {
    await store.dispatch("getMyJobs", params)
}

const logout = async () => {
    const res = await store.dispatch("logout")
    if (res) router.push("/login")
}

onMounted(async () => {
    state.loading = true
    await getJobs()
    state.loading = false
});

const handleShow = () => {
    state.show = !state.show
}

const handleSearch = async () => {
    state.searchLoading = true
    await getJobs({ q: state.search })
    state.searchLoading = false
}
</script>
