import React from "react";

function Item({ data }) {
  return (
    <div className="shadow-md bg-white text-center flex flex-col ">
      <h1 className="text-2xl bg-slate-100  ">TODAY'S ACTIVITY</h1>

      <div className="">
        <h2>Activity: {data.activity}</h2>
        <h2>Type: {data.type}</h2>
        <h2>Participants: {data.participants}</h2>
        <h2>Price: {data.price}</h2>
        <h2>Accessibility: {data.accessibility}</h2>
      </div>
    </div>
  );
}

export default Item;
