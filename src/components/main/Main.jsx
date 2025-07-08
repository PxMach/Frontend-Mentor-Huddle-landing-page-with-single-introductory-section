import React from "react";
import styles from "./main.module.css";
import mockups from "../../assets/images/illustration-mockups.svg";

export default function Main() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <main
      className={`${styles.main}  mt-15 flex flex-col items-center min-[500px]:flex-row min-[500px]:gap-15 min-[500px]:items-start min-[500px]:w-[77rem]`}
    >
      <img className="mb-8" src={mockups} alt="illustration mockups" />
      <div className="flex flex-col items-center min-[500px]:items-start min-[500px]:mt-12 ">
        <h1 className="text-[1.55rem] text-white text-center font-semibold mb-4 min-[500px]:text-[2.3rem] min-[500px]:text-left">
          Build The Community Your Fans Will Love
        </h1>
        <p className="text-gray-300 text-center min-[500px]:text-left">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button
          style={{
            color: isHovered ? "white" : "var(--Soft_Magenta)",
            backgroundColor: isHovered ? "var(--Soft_Magenta)" : "white",
            transition: "background 0.2s",
          }}
          className="bg-white border-none rounded-3xl py-2 mt-6 w-[200px] shadow-sm shadow-black hover:cursor-pointer "
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Register
        </button>
      </div>
      <div className="mt-8 flex gap-3 min-[500px]:absolute min-[500px]:right-15 min-[500px]:bottom-12">
        <i className="devicon-facebook-plain text-white p-3 border-[1px] rounded-[50%] hover:text-[violet]"></i>
        <i className="devicon-twitter-original text-white p-3 border-[1px] rounded-[50%] hover:text-[violet]"></i>
        <i className="fa-brands fa-instagram text-white p-3 border-[1px] rounded-[50%] hover:text-[violet]"></i>
      </div>
    </main>
  );
}
