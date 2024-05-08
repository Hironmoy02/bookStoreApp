// eslint-disable-next-line no-unused-vars
import React from "react";

const Cards = (props) => {
  // eslint-disable-next-line react/prop-types
  const { item } = props;

  // Check if item exists
  if (!item) {
    return null; // If item doesn't exist, return null or any fallback UI
  }
   // eslint-disable-next-line react/prop-types
  console.log("item in cards",props.item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-85 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
         
           {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards
