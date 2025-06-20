import {ContentType} from "@/types/ContentType.ts";

export interface Post {
    id: number,
    title: string,
    author?: string,
    banner: string,
    highlighted?: boolean,
    content: ContentItem[]
}

export interface ContentItem {
    type: ContentType,
    content: string
}