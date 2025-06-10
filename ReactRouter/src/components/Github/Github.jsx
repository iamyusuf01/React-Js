import React, { useEffect, useState } from "react";
import { data } from "react-router";
import { useLoaderData } from "react-router";
function Github() {
   const data = useLoaderData()
  //     const [data, setData] = useState([])
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/iamyusuf01")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 tect-3xl">
      Github Followers: {data?.followers}
      <img
        className="text-center"
        src={data?.avatar_url}
        alt="Git Pics"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/iamyusuf01");
  return response.json();
};
