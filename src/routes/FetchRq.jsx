import React, { useState } from "react";
import { fetchPosts } from "../API/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
const FetchRq = ({ heading }) => {
  const[pageNumber,setPageNumber] = useState(0);
  //  USE QUERY
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts",pageNumber],
    queryFn:()=> fetchPosts(pageNumber),
    // gcTime:1000,
    // staleTime:10000,    //  itny time k bad Server pr again requst jae os se pehly data cache wala hi render hu ga
    // refetchInterval:1000,  // staleTime jab refresh kro ya os page pe again tabb requst jaty thy lkn is me realtime jae gy
    // refetchIntervalInBackground:true  // is ka mtlb agar hm tab me na bi tab bi requst jaty rhy
    placeholderData:keepPreviousData,    // loading na dikhao jab tk next data na ayy  tab tk previous data hi dikhao .
  });
  if (isLoading) return <p className="section-accordion">Loading...</p>;
  if (isError)
    return (
      <p className="section-accordion">
        Error : {error.message} SomeThing went Wrong
      </p>
    );
  return (
    <div>
      <h1>{heading || "All Posts"}</h1>
      <ul className="section-accordion">
        {data?.map((elm) => {
          const { id, title, body } = elm;
          return (
            <>
              <li key={id}>
                <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                  <p>{title}</p>
                  <p>{body}</p>
                </NavLink>
              </li>
            </>
          );
        })}
      </ul>
      {/* PAGINATION FUNCTIONALITY */}
      <div className="pagination-section container">
          <button disabled={pageNumber === 0 ? true : false} onClick={()=>setPageNumber((prev)=>prev-3)}>Prev</button>
          <h2>{pageNumber/3 + 1}</h2>
          <button  onClick={()=>setPageNumber((prev)=>prev+3)}>Next</button>
      </div>
    </div>
  );
};

export default FetchRq;
