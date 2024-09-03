import Link from "next/link";

const Blog  = () => {

    const posts = [
        {
            id: 1,
            title: 'Post 1',
            content: 'Content of post 1',
            author: 'Author 1',
        },
        {
            id: 2,
            title: 'Post 2',
            content: 'Content of post 2',
            author: 'Author 2',
        },
        {
            id: 3,
            title: 'Post 3',
            content: 'Content of post 3',
            author: 'Author 3',
        },
        {
            id: 5,
            title: 'Post 4',
            content: 'Content of post 4',
            author: 'Author 4',
        },
    ];

    return (
        <>
            <h1>Blog Posts</h1>
            <ul>
            {
                posts?.length > 0 && posts?.map((post, i) => (
                    <li key={i}><Link href={`/blog/${post?.title?.replace(/ /g, '-').toLowerCase()}`}>{post.title}</Link></li>
                ))    
            }
            </ul>
        </>
    )
}

export default Blog;