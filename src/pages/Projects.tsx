import generic from "#/generic.module.css";
import post from "#/components/post.module.css";
import posts from "$/json/posts.json"
import type {Post} from "@/types/Post.ts";
import {getHTMLforDisplayPost} from "@/components/PostService.tsx";
import {Helmet} from "react-helmet";

export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Projects - Entropy Entertainment</title>
                <meta name="description"
                      content="Take a look at what we're making, wether it's a games, software or tooling, it's bound to be interesting!"/>
                <meta name="robots" content="index, follow"/>
            </Helmet>

            <div className={`${generic.wrapper}`}>
                <h1>Games</h1>
                <div className={`${post.postgrid}`}>
                    {
                        posts.projects.games.map((post: Post) => (
                            getHTMLforDisplayPost(post)
                        ))
                    }
                </div>
                <h1>Other Software</h1>
                <div className={`${post.postgrid}`}>
                    {
                        posts.projects.software.map((post: Post) => (
                            getHTMLforDisplayPost(post)
                        ))
                    }
                </div>
            </div>
        </>

    )
}