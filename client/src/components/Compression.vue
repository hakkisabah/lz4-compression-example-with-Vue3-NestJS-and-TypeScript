<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <div class="text-body-2 font-weight-light mb-n1">Dataset Compression Example</div>

            <h1 class="text-h2 font-weight-bold">LZ4 Compression Process</h1>
            <v-col cols="12">
                <DataList v-if="getCSVData" :data="getCSVData" />
            </v-col>
            <v-col cols="12">
                <DataList v-if="getTEXTData" :data="getTEXTData" />
            </v-col>
            <v-col cols="12">
                <v-combobox v-model="currentType" :items="dataType" density="comfortable"
                    label="Select Upload Type"></v-combobox>
            </v-col>
            <div class="py-14" />
            <v-row class="d-flex align-center justify-center">
                <FileInputVue v-if="currentType === 'csv'" />
                <TextBaseVue v-else />
            </v-row>
        </v-responsive>
    </v-container>
</template>
  
<script setup lang="ts">
import DataList from './DataList.vue';
import TextBaseVue from './TextBase.vue';
import FileInputVue from './FileInput.vue';
import { ref, computed } from 'vue';
import { DataType } from '@/types';
import useCompression from '@/composables/compression';
const dataType = Object.values(DataType);
const currentType = ref<DataType>(DataType.TEXT);

const { getCompressedByType } = useCompression();

const getCSVData = computed(() => getCompressedByType(DataType.CSV).value);
const getTEXTData = computed(() => getCompressedByType(DataType.TEXT).value);
</script>
  