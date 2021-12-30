<template>
    <Modal @setShow="emit('setShow')">
        <div class="px-16 pb-28">
            <div>
                <p class="text-primary font-semibold text-2xl tracking-[12%] leading-[28px]">New Job</p>
                <p class="mt-5">
                    <span
                        class="text-sm text-tertiary tracking-[0.08em] leading-[16px]"
                    >Kindly provide the required information to get matched with suitable candidates</span>
                </p>
            </div>
            <form class="mt-10" @submit.prevent="handleSubmit">
                <Input label="Job Title" v-model="title" class="mb-11" />
                <Input label="Description" v-model="description" class="mb-11" />
                <Input label="Company Name" v-model="company" class="mb-11" />
                <Input label="location" v-model="location" class="mb-11" />
                <Select label="What type of employment is it?" v-model="type" class="mb-11">
                    <option value="Full-time">Full-time</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Contract">Contract</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Internship">Internship</option>
                    <option value="Volunteer">Volunteer</option>
                </Select>
                <Select label="Work Conditions" v-model="work_condition" class="mb-11">
                    <option value="Remote">Remote</option>
                    <option value="Part Remote">Part Remote</option>
                    <option value="On-Premise">On-Premise</option>
                </Select>
                <Input label="Benefits" v-model="benefits" class="mb-11" />
                <Input label="Salary range" v-model="salary" class="mb-11" />
                <Input label="Submission deadline" class="mb-11" />
                <Select
                    label="What sector is this job categorized under?"
                    v-model="category"
                    class="mb-11"
                >
                    <option value="Tech">Tech</option>
                    <option value="Health care">Health care</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Marketing">Marketing</option>
                </Select>
                <Button
                    class="w-full h-[73px] text-lg bg-primary"
                    spinnerSize="medium"
                    type="submit"
                    :loading="loading"
                >Submit Application</Button>
            </form>
        </div>
    </Modal>
</template>

<script setup>
import { reactive, ref, toRefs } from "vue"

import Modal from "../../components/Modal.vue"
import Input from "../../components/form/Input.vue"
import Select from "../../components/form/Select.vue"
import Button from "../../components/form/Button.vue";
import { useStore } from "vuex";

const store = useStore()

const props = defineProps({ job: { type: Object, default: {} }, isEdit: Boolean })
const emit = defineEmits(["setShow"])

const loading = ref(false)

const form = reactive({ title: "", company: "", description: "", category: "", benefits: "", location: "", salary: "", type: "", work_condition: "", ...props.job });
const { title, description, company, category, benefits, salary, type, work_condition, location } = toRefs(form)

const handleSubmit = async () => {
    let result
    loading.value = true
    if (props.isEdit) {
        result = await store.dispatch("updateMyJob", form)
        if (result) emit("setShow")
    } else {
        result = await store.dispatch("createMyJob", form)
    }
    loading.value = false
    if (result) emit("setShow")
}

</script>