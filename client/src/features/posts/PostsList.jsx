 // API_URL comes from the .env.development file
 import { API_URL } from '../../constants';
 import { useState, useEffect } from "react";
 
 
 export default function PostsList() {
     const [ posts, setPosts ] = useState([]);
     const [ loading, setLoading ] = useState(true);
     const [ error, setError ] = useState(null);

     //fetchPosts from the API
     useEffect(() => {            
            async function loadPosts() {
               try {
                   const response = await fetch(API_URL);
                   // throw new Error('error')
       
                   if(response.ok) {
                       const json = await response.json();
                       setPosts(json);
                   } else {
                       response
                   } 
           
               } catch(e) {
                   console.log('error', e);
                   setError("an Error Occured)")
               } finally {
                   setLoading(false);
               };
           };
            loadPosts();
        }, []);
    
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}
                    className="post-container"
                >
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>

        )
    
}