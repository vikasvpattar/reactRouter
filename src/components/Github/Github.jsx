import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/vikasvpattar")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-400 text-3xl">
      Github followers:{data.followers}
      <img
        src={data.avatar_url}
        alt="github progile"
        width={"280px"}
        height={"280px"}
      />
    </div>
  );
};

export default Github;
