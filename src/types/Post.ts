import {ContentType} from "@/types/ContentType.ts";

export interface Post {
    id: number,
    title: string,
    author?: string, // The author of a post, only displays if given
    banner?: string, // The banner image to use
    highlightedPos?: number, // if the json contains this value, it will be displayed on the homescreen in the position of the number given in aschending order
    content: ContentItem[]
}

export interface ContentItem {
    type: ContentType,
    content: string
}