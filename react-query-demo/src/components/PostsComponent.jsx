// import React from 'react';
// import { useQuery } from 'react-query';

// const PostsComponent = () => {
//   const { data, error, isLoading, isError } = useQuery('posts', async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   });
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }
//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {data.map(post => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostsComponent;



import React from 'react';
import { useQuery, useQueryClient } from 'react-query';



const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

// const PostsComponent = () => {
//   const queryClient = useQueryClient();
//   const { data, error, isLoading, isError } = useQuery('posts', fetchPosts);
// //   const handleRefetch = () => {
//     queryClient.invalidateQueries('posts');
//   };
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }
//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {data.map(post => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleRefetch}>Refetch Data</button>
//     </div>
//   );
// };
// export default PostsComponent;

const PostsComponent = () => {
    const queryClient = useQueryClient();
    const { data, error, isLoading, isError, isFetching } = useQuery(
      'posts',
      fetchPosts,
      {
        // Cache the data for 1 hour
        cacheTime: 1000 * 60 * 60,
        // Mark the data as stale after 10 minutes
        staleTime: 1000 * 60 * 10,
        // Refetch the data when the window is focused
        refetchOnWindowFocus: true,
        // Keep the previous data while refetching
        keepPreviousData: true,
      }
    );
    const handleRefetch = () => {
            queryClient.invalidateQueries('posts');
          };
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>Error: {error.message}</div>;
    }
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {data.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
        {isFetching ? <p>Refetching...</p> : null}
        <button onClick={handleRefetch}>Refetch Data</button>
      </div>
    );
  };
  export default PostsComponent;