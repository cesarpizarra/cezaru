import { navLinks } from "../../constants/home";
import Image from "next/image";
const Header = () => {
  return (
    <header className="sticky top-2 z-50 flex justify-center">
      <div className="navbar m-5 w-5/6 rounded-lg bg-base-100/50 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost btn-circle btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href="#" className="btn-ghost btn text-xl">
            <Image src="/logo.png" width={100} height={100} alt="My logo" />
          </a>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => document.getElementById("greeting").showModal()}
            className="btn-ghost btn-circle btn"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-primary badge-xs indicator-item"></span>
            </div>
          </button>
        </div>
      </div>

      <dialog id="greeting" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello! I&rsquo;m Cesar.</h3>
          <p className="py-4">
            Welcome to my portfolio—enjoy exploring my work and getting to know
            more about what I do! ❤
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </header>
  );
};

export default Header;
