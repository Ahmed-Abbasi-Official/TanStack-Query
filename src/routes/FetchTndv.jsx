import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchInvPost } from "../API/api";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const FetchTndv = () => {
  const { id } = useParams();
  // USE QUERY
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post",id],
    queryFn: () => fetchInvPost(id),
    staleTime: 50000,
  });
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>{error.message} : Something went Wrong!...</p>;
  return (
    <div>
      <ul className="section-accordion">
        <li>
          <h1>Post ID Number : {id}</h1>
          {data && (
            <>
              <p>ID : {data.id}</p>
              <p>Title : {data.title}</p>
              <p>Body : {data.body}</p>
            </>
          )}
        </li>
        <NavLink to="/rq"
        >
            <button>Go Back</button>
        </NavLink>
      </ul>
    </div>
  );
};

export default FetchTndv;
