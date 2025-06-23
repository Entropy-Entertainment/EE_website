import post from "#/components/post.module.css";
import generic from "#/generic.module.css";
import type {ContentItem, Post} from "@/types/Post.ts";
import {ContentType} from "@/types/ContentType.ts";
import {useNavigate} from "react-router";

export function getHTMLforDisplayPost(postJson: Post) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
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
            <button className={`${post.postButton}`} onClick={() => navigate("/post", {state: postJson})}>read more</button>
        </div>
    )
}

export function getHTMLforDisplayProject(postJson: Post) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return (
        <div
            key={postJson.id}
            className={`${generic.container} ${generic.primary} ${generic.w100} ${post.project} ${!postJson.banner ? post.noBanner : ""}`}
        >
            {postJson.banner && (
                <img className={`${generic.w50}`} alt="Banner" src={postJson.banner} />
            )}
            <div>
                <h1>{postJson.title}</h1>
                {postJson.author && <h5>Geschreven door: {postJson.author}</h5>}
                {(() => {
                    const firstParagraph = postJson.content.find(item => item.type === ContentType.paragraph);
                    return firstParagraph ? <p>{firstParagraph.content}</p> : null;
                })()}
            </div>
            <button
                className={`${post.projectButton}`}
                onClick={() => navigate("/post", { state: postJson })}
            >
                read more
            </button>
        </div>
    );
}


export function getHTMLforPost(postJson: Post) {
    return (
        <div key={postJson.id} className={`${generic.container} ${generic.primary} ${generic.w100} ${post.post}`}>
            <h1>
                {postJson.title}
            </h1>
            {postJson.author &&
                <h5>
                    Geschreven door: {postJson.author}
                </h5>
            }
            {postJson.content.map((item: ContentItem) => {
                switch (item.type) {
                    case ContentType.paragraph:
                        return <p key={Math.random()}>{item.content}</p>;
                    case ContentType.image:
                        return <img className={`${generic.mw100}`} src={item.content} alt={item.content} key={Math.random()}/>;
                    case ContentType.subtitle:
                        return <h2 key={Math.random()}>{item.content}</h2>;
                    default:
                        console.error("Something went wrong while rendering post: " + postJson.id + " at " + item);
                        return <></>;
                }
            })}
        </div>
    )
}