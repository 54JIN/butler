"use client";

//Libraries
import { useRouter } from "next/navigation";

export default function HeaderHamburger() {
  const router = useRouter();

  const goToSignIn = () => {
    router.push("/authentication-portal");
  };

  const goToSignUp = () => {
    router.push("/become-a-contractor");
  };

  return (
    <div className="dropdown dropdown-end">
      <button className="btn text-[#485424]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <button onClick={goToSignIn}>Sign up / Log in</button>
        </li>
        <li>
          <button onClick={goToSignUp}>Become a Contractor</button>
        </li>
      </ul>
    </div>
  );
}
