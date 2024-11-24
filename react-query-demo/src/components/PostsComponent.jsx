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



const FetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

const PostsComponent = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading, isError } = useQuery('posts', FetchPosts);
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
      <button onClick={handleRefetch}>Refetch Data</button>
    </div>
  );
};
export default PostsComponent;

