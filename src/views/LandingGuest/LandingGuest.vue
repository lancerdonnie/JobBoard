
<template>
    <div class="bg-custom-5">
        <Nav>
            <template v-slot:left-content>
                <Logo />
            </template>
            <template v-slot:right-content>
                <ul class="flex items-center text-white text-lg">
                    <li class="mr-[30px] cursor-pointer">
                        <router-link to="/jobs">Jobs</router-link>
                    </li>
                    <li class="mr-[30px] cursor-pointer opacity-60">Company Review</li>
                    <li class="mr-[17.5px] cursor-pointer opacity-60">Find Salaries</li>
                    <li
                        class="rounded-md cursor-pointer text-base font-extrabold p-[10px] bg-white text-primary"
                    >Post Job</li>
                </ul>
            </template>

            <template v-slot:default>
                <p
                    class="text-white text-[40px] pl-4 pb-[129px] font-semibold tracking-[0.12em] leading-[47px]"
                >Find Your Dream Job</p>
            </template>
        </Nav>
        <SearchLocation
            v-model="search"
            @click="handleSearch"
            class="relative mt-[-30px] mx-28 z-10"
        />
        <Spinner v-if="loading" :color="colors.primary" class="h-24" />
        <div v-else-if="jobs.length" class="mt-[110px] px-[95px] bg-custom-5">
            <div
                class="flex justify-between w-1/2 pr-[23px] text-tertiary leading-[21px] tracking-[0.05em]"
            >
                <span>showing {{ jobs.length }} results</span>
                <span class="flex">
                    <span class="text-tertiary/50">Sort by</span>
                    <span class="flex items-center gap-1 cursor-pointer">
                        : Latest
                        <AngleB class="mt-1" />
                    </span>
                </span>
            </div>
            <div class="flex gap-[46px] mt-10">
                <div class="flex-1">
                    <JobCard
                        v-for="job in jobs"
                        :key="job.id"
                        :job="job"
                        :selected="job.id === details?.id"
                        @click="handleCardClick(job)"
                    />
                </div>
                <div class="flex-1">
                    <JobDetails v-if="details" :details="details" @click="handleShow" />
                </div>
            </div>
        </div>
        <div v-else>No Jobs Available</div>

        <Pagination :size="7" class="mt-10 mb-[117px] ml-[95px]" @click="handlePageClick" />

        <Footer class="flex text-white text-lg gap-20">
            <div class="flex-1 flex justify-between">
                <div>
                    <Logo />
                    <p class="mt-[17px]">
                        © 2021
                        <span class="font-mont text-custom-1 ml-1">FindJobs</span>
                    </p>
                </div>
                <FooterLinks />
            </div>
            <div class="flex-1 flex justify-between">
                <FooterLinks />
                <div class="text-center leading-[35.2px]">
                    <p class="text-[22px]">Social Media</p>
                    <Socials class="mt-1" />
                </div>
            </div>
        </Footer>
    </div>
    <ApplyForm v-if="show" @setShow="handleShow" />
</template>    

<script>

import { useStore } from "vuex"
import { onMounted, reactive, ref, toRefs } from "vue"
import tailwindTheme from "../../utils/theme"

import Nav from '../../components/Nav.vue'
import SearchLocation from '../../components/SearchLocation.vue'
import Footer from '../../components/Footer.vue'
import Socials from '../../components/Socials.vue'
import Spinner from '../../components/Spinner.vue'
import Modal from '../../components/Modal.vue'
import ApplyForm from './ApplyForm.vue'
import Input from '../../components/form/Input.vue'
import JobCard from "./JobCard.vue"
import JobDetails from "./JobDetails.vue"
import FooterLinks from "./FooterLinks.vue"
import Pagination from "../../components/Pagination.vue"

import Logo from '../../assets/svg/logo.svg'
import AngleB from '../../assets/svg/angle_b.svg'

export default {
    components: {
        Nav,
        SearchLocation,
        Footer,
        Socials,
        Logo,
        Spinner,
        Modal,
        Input,
        ApplyForm,
        AngleB,
        JobCard,
        JobDetails,
        Pagination, FooterLinks
    },
    setup() {
        const store = useStore()
        const state = reactive({ jobs: [], meta: {}, loading: false });
        const form = reactive({ first_name: "", last_name: "", email: "", phone: "", location: "", cv: "" });
        const details = ref()
        const show = ref(false)
        const search = ref("")

        onMounted(async () => {
            state.loading = true
            const result = await store.dispatch("getJobs")
            if (result) {
                const { data, ...rest } = result
                state.jobs = data
                state.meta = rest.meta
            }
            state.loading = false
        });

        const handleCardClick = (job) => {
            details.value = job
        }

        const handleShow = () => {
            show.value = !show.value
        }

        const handleSearch = () => {
            console.log(search.value)
        }

        const handlePageClick = () => {

        }

        return { ...toRefs(state), ...toRefs(form), handleCardClick, handlePageClick, handleShow, handleSearch, search, show, details, colors: tailwindTheme.theme.colors }
    }
}

</script>
