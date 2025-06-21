import post from "#/components/post.module.css";
import generic from "#/generic.module.css";
import type {ContentItem, Post} from "@/types/Post.ts";
import {ContentType} from "@/types/ContentType.ts";

function goToArticle(postJson: Post) {
    console.log("Navigate to " + postJson.title + ", id: " + postJson.id);
}

export function getHTMLforDisplayPost(postJson: Post) {
    return (
        <div key={postJson.id} className={`${generic.container} ${generic.primary} ${generic.w100} ${post.post}`}>
            <div>
                <h1>
                    {postJson.title}
                </h1>
                {postJson.author &&
                    <h5>
                        Geschreven door: {postJson.author}
                    </h5>
                }

                {(() => {
                    const firstParagraph = postJson.content.find(item => item.type === ContentType.paragraph);
                    return firstParagraph ? <p className={`${generic.w100}`}>{firstParagraph.content}</p> : null;
                })()}
            </div>
            <button className={`${post.postButton}`} onClick={() => goToArticle(postJson)}>read more</button>
        </div>
    )
}

export function getHTMLforDisplayProject(postJson: Post) {
    return (
        <div key={postJson.id} className={`${generic.container} ${generic.primary} ${generic.w100} ${post.project}`}>
            <img className={`${generic.w50}`} alt={postJson.banner} src={postJson.banner}/>
            <div>
                <h1>
                    {postJson.title}
                </h1>
                {postJson.author &&
                    <h5>
                        Geschreven door: {postJson.author}
                    </h5>
                }

                {(() => {
                    const firstParagraph = postJson.content.find(item => item.type === ContentType.paragraph);
                    return firstParagraph ? <p>{firstParagraph.content}</p> : null;
                })()}
            </div>
            <button className={`${post.projectButton}`} onClick={() => goToArticle(postJson)}>read more</button>
        </div>
    )
}

export function getHTMLforPost(postJson: Post) {
    return (
        <div className={`${generic.container} ${generic.primary} ${generic.w100}`}>
            <h1>
                {postJson.title}
            </h1>
            {postJson.author &&
                <h5>
                    written by: {postJson.author}
                </h5>
            }
            {postJson.content.map((item: ContentItem) => {
                switch (item.type) {
                    case ContentType.paragraph:
                        return <p>{item.content}</p>;
                    case ContentType.image:
                        return <img src={item.content} alt={item.content}/>;
                    case ContentType.subtitle:
                        return <h2>{item.content}</h2>;
                    default:
                        console.error("Something went wrong while rendering post: " + postJson.id + " at " + item);
                        return <></>;
                }
            })}
        </div>
    )
}