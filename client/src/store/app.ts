// Utilities
import { defineStore } from 'pinia'
import { IStreamResponse, IStream } from '@/types'
import { reactive, computed } from 'vue'

// Store
const state = reactive<IStreamResponse>({} as IStreamResponse)
export default defineStore('app', () => {
  const addData = (data: IStream) => {
    if (!state[data.type]) {
      state[data.type] = [] // We need to initialize the array for the first time
    }
    state[data.type].push(data)
  }
  const getCompressedData = (type: string) => computed(() => state[type as IStream['type']])
  
  return {addData, getCompressedData}
})
