<template>
    <v-container fluid>
        <v-card class="mx-auto">
            <v-toolbar color="black" cards dark flat>
                <v-card-title class="text-h6 font-weight-regular">
                    Type or paste your string here
                </v-card-title>
            </v-toolbar>
            <v-textarea clearable clear-icon="mdi-close-circle" label="Text" v-model="text" :loading="isLoading"
                :disabled="isLoading"></v-textarea>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="sendCompression()">
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import http from '@/http-common';
import { ref } from 'vue';

const isLoading = ref<boolean>(false);
const text = ref<string>('This is clearable text.');
const sendCompression = () => {
    if (text.value.length > 80) {
        isLoading.value = true;
        http.post('/text', { dataSetString: text.value }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            text.value = '';
            isLoading.value = false;
        })
    } else {
        alert('Text must be at least 81 characters long')
    }
}
</script>
