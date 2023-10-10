<template>
    <v-col cols="12">
        <v-file-input clearable label="File input" hint="only csv files" :persistent-hint="true" prepend-icon=""
            :onchange="file"
            :loading="isLoading"
            :show-size="true"
            :disabled="isLoading"></v-file-input>
    </v-col>
</template>
<script setup lang="ts">
import http from '@/http-common';
import { ref } from 'vue';

const isLoading = ref<boolean>(false);
const file = (event: any) => {
    if (event.target.files[0].type !== 'text/csv') {
        alert('Only csv files are allowed')
        return
    } else {
        const formData = new FormData();
        formData.append('dataSet', event.target.files[0]);
        isLoading.value = true;
        http.post('/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => {
            isLoading.value = false;
        })
    }
};
</script>
