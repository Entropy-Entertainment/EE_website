import home from "#/pages/home.module.css";
import generic from "#/generic.module.css";
import post from "#/components/post.module.css";
import posts from "$/json/posts.json";
import {getHTMLforDisplayPost, getHTMLforDisplayProject} from "@/components/PostService";
import type {JSX} from "react/jsx-runtime";
import type {Post} from "@/types/Post.ts";

export const Home = () => {
    const getLatestPosts = (limit: number) => {
        let postCount = 0;
        const aggrigatedPosts: JSX.Element[] = [];
        posts.posts.forEach((post: Post) => {
            if (postCount < limit) {
                aggrigatedPosts.push(getHTMLforDisplayPost(post));
                postCount++;
            }
        })
        return aggrigatedPosts;
    }

    const getHighlightedProjects = (): JSX.Element[] => {
        const combinedProjects = [...posts.projects.games, ...posts.projects.software];

        return combinedProjects
            .filter((project: Post) => project.highlightedPos !== undefined)
            .sort((a: Post, b: Post) => a.highlightedPos! - b.highlightedPos!)
            .map(getHTMLforDisplayProject);
    };

    return (
        <>
            <div className={`${generic.wrapper}`}>
                <div className={`${home.banner} ${generic.w100}`}>
                    <span>
                        <h1 className={`${home.fancytext} ${generic.wmin} ${generic.nowrap}`}>Entropy Entertainment</h1>
                        <h2 className={`${generic.wmin} ${generic.nowrap}`}>We make games and software</h2>
                    </span>
                </div>
                <h1>
                    Projecten
                </h1>
                {
                    getHighlightedProjects()
                }

                <h1>
                    Over ons
                </h1>

                <div className={`${generic.container} ${generic.secondary} ${generic.w100}`}>
                    <h1>Wie zijn wij?</h1>
                    <p>Entropy Entertainment is een team van 3 studenten die gepassioneerd zijn in game en software
                        development</p>
                </div>
                {
                    posts.posts.length > 0 &&
                    <h1>Posts</h1>
                }
                <div className={`${post.postgrid}`}>
                    {
                        getLatestPosts(3)
                    }
                </div>
            </div>
        </>
    )
}