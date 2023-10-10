<template>
    <v-card class="mx-auto">
        <v-card-title class="bg-orange-darken-4">
            {{ data[0].type === 'csv' ? 'CSV Compression List' : 'Text Compression List' }}
        </v-card-title>
        <v-table theme="dark">
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Uncompressed Size
                    </th>
                    <th class="text-left">
                        Compressed Size
                    </th>
                    <th class="text-left">
                        Size Difference
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                    <th class="text-left">
                        Download Compressed
                    </th>
                    <th class="text-left">
                        Download Decompressed
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in props.data" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.uncompressedSize }}</td>
                    <td>{{ item.compressedSize }}</td>
                    <td>{{ +item.uncompressedSize - +item.compressedSize }}</td>
                    <td>{{ item.type }}</td>
                    <td><a :href="getLink(item.buffer)" :download="getCompressedName(item.name)">download compressed</a>
                    </td>
                    <td><a :href="getDecompressedLink(item.buffer, item.type)"
                            :download="getDecompressedName(item.name)">download decompressed</a></td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>
<script setup lang="ts">
import { IStream } from '@/types'
import useCompression from '@/composables/compression'
const { deCompressFile } = useCompression();

interface Props {
    data: IStream[]
}
const props = defineProps<Props>()
const getLink = (buffer: IStream['buffer']) => window.URL.createObjectURL(new Blob([buffer], { type: 'application/octet-stream' }));
const getCompressedName = (name: IStream['name']) => name.split('.')[0] + '.lz4';

const getDecompressedName = (name: IStream['name']) => name.split('.')[name.split('.').length - 1] === 'csv'
    ? name.split('.')[0] + '.csv'
    : name.split('.')[0] + '.txt';
const getDecompressedLink = (buffer: IStream['buffer'], type: IStream['type']) => {
    const decompressed = deCompressFile(buffer)
    return window.URL.createObjectURL(new Blob([decompressed], { type: type === 'csv' ? 'application/octet-stream' : 'text/plain' }));
}
</script>