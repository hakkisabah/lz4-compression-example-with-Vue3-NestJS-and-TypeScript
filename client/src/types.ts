export enum DataType {
    CSV = "csv",
    TEXT = "text",
}

export interface IStream {
    id: string;
    name: string;
    uncompressedSize: number;
    compressedSize: number;
    type: DataType;
    buffer: string;
}

export interface IStreamResponse {
   [DataType.CSV]: IStream[],
   [DataType.TEXT]: IStream[],
}