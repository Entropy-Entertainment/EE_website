import generic from "#/generic.module.css";
import postcss from "#/components/post.module.css";
import {getHTMLforPost} from "@/components/PostService.tsx";
import {useLocation} from "react-router";
import type {Post} from "@/types/Post.ts";

export default function RenderedPost() {
    const location = useLocation();
    const post: Post = location.state;

    return (
        <div className={`${generic.wrapper}`}>
            {
                post ?
                    getHTMLforPost(post)
                    :
                    <>
                        <h1>Something went wrong!</h1>
                        <button className={`${postcss.postButton}`}>Go home</button>
                    </>

            }
        </div>
    )
}