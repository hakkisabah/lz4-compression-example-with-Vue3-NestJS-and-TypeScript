import useAppStore from '@/store/app';
import LZ4 from 'lz4js';
import { IStream, DataType } from '@/types';

export default () => {
    const { addData , getCompressedData } = useAppStore();
    const getRandom = () => Math.random().toString(36).substring(2, 9);

    const deCompressFile = (buffer : IStream['buffer']) => {
        const decompressed = LZ4.decompress(buffer)
        const decoder = new TextDecoder('utf-8')
        return decoder.decode(decompressed)
    }

    const saveCompressedFile = (data:object) => {
        const fileResponse : IStream = {
            id: getRandom(),
            name: data.fileName,
            uncompressedSize: data.sizeBeforeCompression,
            compressedSize: data.sizeAfterCompression,
            type: DataType.CSV,
            buffer: data.dataSet.data
        }
        addData(fileResponse)
    }

    const saveCompressedText = (data:object) => {
        const textResponse : IStream = {
            id: getRandom(),
            name: `string_${getRandom()}`,
            uncompressedSize: data.sizeBeforeCompression,
            compressedSize: data.sizeAfterCompression,
            type: DataType.TEXT,
            buffer: data.dataSetString.data
        }
        addData(textResponse)
    }

    const getCompressedByType = (type:DataType) => getCompressedData(type);

    return {deCompressFile, saveCompressedFile,saveCompressedText, getCompressedByType}
}