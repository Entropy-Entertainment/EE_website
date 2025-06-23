import generic from "#/generic.module.css";
import post from "#/components/post.module.css";
import posts from "$/json/posts.json";
import type {Post} from "@/types/Post.ts";
import {getHTMLforDisplayPost} from "@/components/PostService.tsx";
import {Helmet} from "react-helmet";

export const Posts = () => {
    return (
        <>
            <Helmet>
                <title>Posts - Entropy Entertainment</title>
                <meta name="description" content="Come see what Entropy Entertainment is working on, and other interesting things we want to talk about!" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <div className={`${generic.wrapper}`}>
                <h1>Posts</h1>
                {
                    posts.posts.length > 0 ?
                        <div className={`${post.postgrid}`}>
                            {
                                posts.posts.map((post: Post) => (
                                    getHTMLforDisplayPost(post)
                                ))
                            }
                        </div> :
                        <div className={post.nonefound}>
                            <h1>
                                Helaas, we hebben nog niets om over te praten.
                            </h1>
                            <h2>Kom later terug</h2>
                        </div>
                }
            </div>
        </>
    )
}