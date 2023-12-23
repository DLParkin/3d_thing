import { useState } from "react";

const Navbar = () => {
  const [openAbout, setOpenAbout] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="flex text-lg gap-7 font-medium">
          <a
            onClick={() => setOpenAbout(!openAbout)}
            className={
              "pl-5 pr-5 w-auto h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
            }
          >
            <p className="blue-gradient_text">About</p>
          </a>
        </nav>
      </header>
      {openAbout ? (
        <div className="notice">
          <p className="textarea ml-5 mr-5">
            Wanted to learn a little about three.js
            <br />
            <br />
            Cheers to{" "}
            <a
              href="https://www.youtube.com/watch?v=FkowOdMjvYo"
              className="underline"
            >
              Javascript Mastery
            </a>{" "}
            for the intro tutorial.
            <br />
            <a
              onClick={() => setOpenAbout(!openAbout)}
              className={
                "pl-10 pr-10 w-auto h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
              }
            >
              <p className="blue-gradient_text">Close</p>
            </a>
          </p>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
