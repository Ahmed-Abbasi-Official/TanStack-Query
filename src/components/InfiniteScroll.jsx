import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { fetchUsers } from '../API/api'

const InfiniteScroll = () => {

    //  USE INFINITE QUERY

   const {data,hasNextPage,fetchNextPage,status,isFetchingNextPage}= useInfiniteQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        getNextPageParam: (lastPage,allPages) => {
            // console.log("lastPage: ",lastPage  );
            // console.log("allPages: " , allPages );
        return    lastPage.length===10 ? allPages.length + 1 :undefined;
            
    }})

    //  HANDLE SCROLL

    const handleScroll = () => {
        const bottom=window.innerHeight +window.scrollY >= document.documentElement.scrollHeight -1 ;
        if (bottom && hasNextPage) {
            fetchNextPage();
        }
    }

    //  USE EFFECT

    useEffect(() => {
      window.addEventListener("scroll",handleScroll);
    return ()=>  window.removeEventListener("scroll",handleScroll);
    }, [hasNextPage])

    // STATUS

    if(status=="loading")return <p>Loading...</p>
    if(status ==="error")return <p>Error in Fetching Data ...</p>
    
    
  return (
    <div>
        <h1>Infinite Scroll with React Query v5</h1>
        {
            data?.pages?.map((page,idx)=>(
                <ul key={idx}>
                    {page.map((user)=>(
                        <li key={user.id}>
                            <p>{user.login}</p>
                            <img src={user.avatar_url} 
                            width={50}
                            height={50}
                            />
                        </li>
                    ))}
                </ul>
            ))
        }
        {isFetchingNextPage && (
            <p>Loading More ...</p>
        )}
    </div>
  )
}

export default InfiniteScroll