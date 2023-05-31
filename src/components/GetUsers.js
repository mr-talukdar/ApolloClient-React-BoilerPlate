import React, {useEffect, useState} from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const GetUsers = () => {
  const {error, loading, data} = useQuery(LOAD_USERS);

  const [posts, setPosts]=useState([]);

    useEffect(() => {
      
    if(data){
        setPosts(data.postsAvailable);
    }
    console.log(data)
    }, [data])
    
    
    
  return (
  <div>
    {posts.map((post)=>{
        console.log(post);
       return(
        <div key={post.id}>{post.title}</div>
       )
    })}
  </div>
  )
};

export default GetUsers;
