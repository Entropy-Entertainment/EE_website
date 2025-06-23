import home from "#/pages/home.module.css";
import generic from "#/generic.module.css";
import post from "#/components/post.module.css";
import posts from "$/json/posts.json";
import {getHTMLforDisplayPost, getHTMLforDisplayProject, getHTMLforPost} from "@/components/PostService";
import type {JSX} from "react/jsx-runtime";
import type {Post} from "@/types/Post.ts";
import {Helmet} from "react-helmet";

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
        console.log('Combined projects:', combinedProjects);

        const highlighted = combinedProjects.filter(p => p.highlightedPos !== undefined);
        console.log('Highlighted projects:', highlighted);

        return combinedProjects
            .filter((project: Post) => project.highlightedPos !== undefined)
            .sort((a: Post, b: Post) => a.highlightedPos! - b.highlightedPos!)
            .map(getHTMLforDisplayProject);
    };

    function projectsAvailable() {
        return posts.projects.software.length > 0 || posts.projects.games.length > 0;
    }

    return (
        <>
            <Helmet>
                <title>Home - Entropy Entertainment</title>
                <meta name="description"
                      content="Welcome to Entropy Entertainment, an indie dev studio making fun games and usefull software and tooling"/>
                <meta name="robots" content="index, follow"/>
            </Helmet>

            <div className={`${generic.wrapper}`}>
                <div className={`${home.banner} ${generic.w100}`}>
                    <span>
                        <h1 className={`${home.fancytext} ${generic.wmin} ${generic.nowrap}`}>Entropy Entertainment</h1>
                        <h2 className={`${generic.wmin} ${generic.nowrap}`}>Wij maken games en software</h2>
                    </span>
                </div>
                {projectsAvailable() &&
                    <h1>
                        Projecten
                    </h1>
                }
                {
                    getHighlightedProjects()

                }
                {
                    getHTMLforPost(posts.about.aboutus)
                }

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