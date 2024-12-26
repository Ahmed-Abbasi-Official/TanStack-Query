import React from 'react'
import {fetchPosts} from '../API/api'
import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom'
const FetchRq = ({heading}) => {
  //  USE QUERY
  const {data,isLoading,isError,error}=useQuery({
    queryKey:['posts'],
    queryFn:fetchPosts,
    // gcTime:1000,
    // staleTime:10000,    //  itny time k bad Server pr again requst jae os se pehly data cache wala hi render hu ga 
    // refetchInterval:1000,  // staleTime jab refresh kro ya os page pe again tabb requst jaty thy lkn is me realtime jae gy
    // refetchIntervalInBackground:true  // is ka mtlb agar hm tab me na bi tab bi requst jaty rhy

  })
  if(isLoading)return <p className='section-accordion'>Loading...</p>
  if(isError)return <p className='section-accordion'>Error : {error.message} SomeThing went Wrong</p>
  return (
    <div>
      <h1>{heading|| "All Posts"}</h1>
      <ul className='section-accordion'>
        {data?.map((elm)=>{
          const {id,title,body}=elm;
          return(
          <>
          
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
              <p>{title}</p>
              <p>{body}</p>
              </NavLink>
            </li>
          </>
          )
        })}
      </ul>
    </div>
  )
}

export default FetchRq