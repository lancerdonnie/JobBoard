
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
                <p class="text-white text-[40px] pl-4 pb-[129px]">Find Your Dream Job</p>
            </template>
        </Nav>
        <Search class="relative mt-[-30px] mx-28 z-10" />
        <Spinner v-if="loading" :color="colors.primary" class="h-24" />
        <div v-else-if="jobs.length" class="mt-[110px] px-[95px] bg-custom-5">
            <div>
                <span>showing {{ jobs.length }} results</span>
            </div>
            <div class="flex gap-[46px]">
                <div class="flex-1">
                    <div
                        class="p-8 shadow-card mb-[35px] rounded-[10px]"
                        v-for="job in jobs"
                        :key="job.id"
                    >
                        <div class="flex justify-between">
                            <span>{{ job.title }}</span>
                            <span>{{ job.salary }}</span>
                        </div>
                        <div>{{ job.location }}</div>
                        <div>{{ job.description }}</div>
                        <button
                            class="ml-auto block bg-custom-3 px-[15.5px] py-[8px] rounded-[10px] text-white text-[14px]"
                            @click="handleCardClick(job)"
                        >see more</button>
                    </div>
                </div>
                <div class="flex-1">
                    <div v-if="details" class="shadow-details rounded-[10px]">
                        <div class="p-[37px]">
                            <div>{{ details.title }}</div>
                            <div>{{ details.location }}</div>
                            <button
                                class="block bg-primary px-[36px] py-[10px] rounded-[10px] text-white text-[14px]"
                                @click="handleShow"
                            >Apply Via Find Job</button>
                        </div>
                        <div class="h-[0.8px] bg-custom-3 w-full" />
                        <div class="p-[37px]">
                            In this role, you will be responsible for developing and
                            implementing user interface components using React.js concepts
                            and workflow such as Redux, Flux, and Webpack. You will also be
                            responsible for profiling and improving front-end performance
                            and documenting our front-end codebase.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>No Jobs Available</div>

        <Footer class="flex text-white">
            <div class="flex-1 flex justify-between">
                <div>
                    <Logo />
                    <p class="mt-[17px]">
                        © 2021
                        <span class="font-mont text-custom-1 ml-1">FindJobs</span>
                    </p>
                </div>
                <div>
                    <p>Quick Links</p>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Calendar</li>
                        <li>Terms and condition</li>
                    </ul>
                </div>
            </div>
            <div class="flex-1 flex justify-between">
                <div>
                    <p>Quick Links</p>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Calendar</li>
                        <li>Terms and condition</li>
                    </ul>
                </div>
                <div>
                    <p>Social Media</p>
                    <Socials />
                </div>
            </div>
        </Footer>
    </div>
    <ApplyForm v-if="show" @setShow="handleShow" />
</template>    

<script>

import { useStore } from "vuex"
import { onMounted, reactive, ref, toRefs } from "vue"

import Nav from '../../components/Nav.vue'
import Search from '../../components/Search.vue'
import Footer from '../../components/Footer.vue'
import Socials from '../../components/Socials.vue'
import Spinner from '../../components/Spinner.vue'
import Modal from '../../components/Modal.vue'
import ApplyForm from './ApplyForm.vue'
import Input from '../../components/form/Input.vue'
import Logo from '../../assets/logo.svg'

import tailwindTheme from "../../utils/theme"

export default {
    components: {
        Nav,
        Search,
        Footer,
        Socials,
        Logo,
        Spinner,
        Modal,
        Input, ApplyForm
    },
    setup() {
        const store = useStore()
        const state = reactive({ jobs: [], meta: {}, loading: false });
        const form = reactive({ first_name: "", last_name: "", email: "", phone: "", location: "", cv: "" });
        const details = ref()
        const show = ref(false)

        onMounted(async () => {
            state.loading = true
            const { data, ...rest } = await store.dispatch("getJobs")
            state.jobs = data
            state.meta = rest.meta
            state.loading = false
        });

        const handleCardClick = (job) => {
            details.value = job
        }

        const handleShow = () => {
            show.value = !show.value
        }

        return { ...toRefs(state), ...toRefs(form), handleCardClick, handleShow, show, details, colors: tailwindTheme.theme.colors }
    }
}

</script>
