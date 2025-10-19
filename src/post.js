import {useGetPostsQuery} from "./redux/api/postApiSlice.ts"

const Post=()=>{
    const {data,isError,isSuccess,isFetching}=useGetPostsQuery({
        limit:10,
        ofset:0
    })
    return(
        <div>
            <h1>Post</h1>
            {isFetching && <div>Loading...</div>}
            {isError && <div>Error</div>}
            {isSuccess && <div>{data.map(post=>(<div key={post.id}>{post.title}</div>))}</div>}
        </div>
    )
}
export default Post