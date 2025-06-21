import generic from "#/generic.module.css";
import post from "#/components/post.module.css";
import posts from "$/json/posts.json";
import type {Post} from "@/types/Post.ts";
import {getHTMLforDisplayPost} from "@/components/PostService.tsx";

export const Posts = () => {
    return (
        <div className={`${generic.wrapper}`}>
            <h1>Posts</h1>
            <div className={`${post.postgrid}`}>
                {
                    posts.posts.map((post:Post) => (
                        getHTMLforDisplayPost(post)
                    ))
                }
            </div>

        </div>
    )
}