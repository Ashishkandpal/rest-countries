import { useTheme } from "../themeContext";

const Nav = () => {
  const { dark, setDark } = useTheme();

  function handleTheme() {
    console.log("theme changing");
    setDark((prev) => !prev);
  }
  return (
    <nav
      className={`flex justify-between h-20 items-center ${
        dark ? "bg-dark-mode-el" : "bg-light-mode-el text-light-mode-text"
      } px-10 sm:px-16 shadow-xl`}
    >
      <h2 className="text-[1rem] sm:text-[1.4rem] font-semibold">
        Where in the world ?
      </h2>
      <div className="flex gap-2 cursor-pointer" onClick={handleTheme}>
        <img
          className="h-4 w-4 sm:h-6 sm:w-6"
          src={`${dark ? "/night-mode.png" : "/light-mode.png"}`}
          alt="moon"
        />
        <span className="text-[0.8rem] sm:text-[1rem]">Dark Mode</span>
      </div>
    </nav>
  );
};

export default Nav;
