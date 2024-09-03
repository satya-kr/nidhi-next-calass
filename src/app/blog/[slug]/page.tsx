"use client"

import { useParams } from "next/navigation";

const BlogPost = () => {

    const {slug} = useParams();
    console.log(slug);
    return (
        <>
            <button onClick={() => window.history.back()}>{ "<-" } Go Back</button>
            <h1>Blog slug: {slug}</h1>
        </>
    )
}

export default BlogPost;