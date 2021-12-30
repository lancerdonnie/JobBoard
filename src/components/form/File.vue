<template>
<div @dragover.prevent @drop.prevent>
    <input ref="input" type="file" class="hidden" @change="uploadFile" />
    <div
        class="flex justify-center items-center text-lg leading-[21px] tracking-[0.04em] font-semibold h-80 rounded-[10px] border-primary border-[0.5px]"
    @drop="dropFile"
    >
    <div 
    v-if="!file"
    class="flex flex-col justify-center items-center"
    >
        <Upload />
        <p class="text-center text-primary mt-4">
        <p>Drag and drop your CV here</p>
        <p class="mt-2">or</p>
        </p>
        <Button
            class="bg-primary h-[50px] w-[192px] mt-4 text-lg font-semibold leading-[21px] tracking-[0.04em]"
        @click.prevent="input.click()"
        >Browse files</Button>
        </div>
        <div v-else class="text-primary">
            {{file.name}}
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Button from './Button.vue';
import Upload from "@/assets/svg/upload.svg";

const input = ref(null)
const file = ref()

 const dropFile=(e)=> {
     console.log(e.dataTransfer.files[0])
        file.value = e.dataTransfer.files[0];
  }

  const uploadFile=(e)=>{
      file.value=e.target.files[0]
  }
</script>