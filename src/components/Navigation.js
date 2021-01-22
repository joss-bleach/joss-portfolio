import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="w-full px-5 h-20">
      <div className="jb-container flex flex-row justify-between h-full items-center">
        <Link href="/">
          <a>
            <h4 className="font-bold tracking-wide">Joss Bleach</h4>
          </a>
        </Link>
        <ul className="hidden md:flex flex-row space-x-8 items-center">
          <li className="nav-item">
            <a href="#">Services</a>
          </li>
          <li className="nav-item">
            <a href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li>
            <button className="px-4 py-2 bg-gray-200 rounded font-medium tracking-wide transition transform hover:-translate-y-1">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
