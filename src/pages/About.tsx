import generic from "#/generic.module.css";
import {Helmet} from "react-helmet";
import {getHTMLforPost} from "@/components/PostService.tsx";
import posts from "$/json/posts.json";

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us - Entropy Entertainment</title>
                <meta name="description" content="Learn more about Entropy Entertainment, what we do, and who'se behind it" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <div className={`${generic.wrapper}`}>
                {
                    getHTMLforPost(posts.about.aboutus)
                }
            </div>
        </>
    )
}