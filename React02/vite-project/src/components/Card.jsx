import React from "react";

const Card = ({username="Hitesh",address="Not Available"}) => {
  console.log(username,address);
  return (
    <>
      <figure className ="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className ="w-24 h-24 rounded-full mx-auto"
          src="https://avatars.githubusercontent.com/u/85199417?v=4"
          alt=""
          width="384"
          height="512"
        />
        <div className ="pt-6 space-y-4">
          <blockquote>
            <p className ="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className ="font-medium">
            <div className ="text-sky-500 dark:text-sky-400">{username}</div>
            <div className ="text-slate-700 dark:text-slate-500">
              {address}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Card;
