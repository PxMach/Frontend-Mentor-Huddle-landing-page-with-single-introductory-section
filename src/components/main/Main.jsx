import styles from "./main.module.css";
import mockups from "../../assets/images/illustration-mockups.svg";

export default function Main() {
  return (
    <main className={`${styles.main}  mt-4 flex flex-col items-center `}>
      <img className="mb-8" src={mockups} alt="illustration mockups" />
      <h1 className="text-[28px] text-white text-center font-semibold mb-4">
        Build The Community Your Fans Will Love
      </h1>
      <p className="text-gray-100 text-center">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button
        className="bg-white border-none rounded-3xl text-violet-500 py-2 mt-6 w-[200px] shadow-sm shadow-black  "
        type="button"
      >
        Register
      </button>
      <div>
        {/* icon */}
      </div>
    </main>
  );
}
