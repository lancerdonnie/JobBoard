<template>
    <Modal @setShow="emit('setShow')">
        <div class="px-16 pb-28">
            <div>
                <p
                    class="text-primary font-semibold text-2xl tracking-[12%] leading-[28px]"
                >{{ job.title }}</p>
                <p class="mt-5 flex items-start">
                    <Pointer />
                    <span
                        class="ml-2 text-lg text-tertiary tracking-[0.12em] leading-[21px]"
                    >{{ job.location }}</span>
                </p>
            </div>
            <form class="mt-10" @submit.prevent="handleSubmit">
                <Input label="First Name" v-model="first_name" class="mb-11" />
                <Input label="Last Name" v-model="last_name" class="mb-11" />
                <Input label="Email Address" v-model="email" class="mb-11" />
                <Input label="location" v-model="location" class="mb-11" />
                <Input label="Phone Number" v-model="phone" class="mb-11" />
                <File class="mb-11" />
                <Button
                    class="w-full h-[73px] text-[18px] bg-primary"
                    spinnerSize="medium"
                    type="submit"
                    :loading="loading"
                >Submit Application</Button>
            </form>
        </div>
    </Modal>
</template>

<script setup>
import { reactive, toRefs, ref } from "vue"
import { useStore } from "vuex";

import Modal from "../../components/Modal.vue"
import Input from "../../components/form/Input.vue"
import Button from "../../components/form/Button.vue";
import Pointer from "@/assets/svg/pointer.svg";
import File from "../../components/form/File.vue";

const store = useStore()

const emit = defineEmits(["setShow"])
const props = defineProps({ job: Object })

const form = reactive({ first_name: "", last_name: "", email: "", phone: "", location: "", cv: "" });
const { first_name, last_name, email, phone, location, cv } = toRefs(form)

const loading = ref(false)

const handleSubmit = async () => {
    loading.value = true
    const result = await store.dispatch("applyForJob", { id: props.job.id, data: form })
    loading.value = false
    if (result) emit("setShow")
}
</script>