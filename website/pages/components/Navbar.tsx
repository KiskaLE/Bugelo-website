import { Children, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-primary text-text h-16 flex justify-between items-center px-4">
        <h1>FbaPrepared</h1>
        <HiOutlineMenu
          onClick={() => {
            setOpen(!isOpen);
          }}
          size={40}
        />
        <Navigation isOpen={isOpen}>
          <ul className="flex flex-col mx-10 my-5 gap-10">
            <ListLink href="/" setOpen={setOpen}>
              Home
            </ListLink>
            <ListLink href="/contact" setOpen={setOpen}>
              Contact
            </ListLink>
          </ul>
        </Navigation>
      </nav>
    </>
  );
}

function Navigation({ isOpen, children }: any) {
  return (
    <div
      className={`min-h-screen max-sm:w-screen bg-inherit absolute left-0 top-16 md:w-[300px]  ${
        isOpen
          ? "max-sm:translate-x-0 md:translate-x-[calc(100vw-300px)]"
          : "translate-x-[100vw]"
      } ease-in-out duration-300`}
    >
      {children}
    </div>
  );
}
function ListLink({ children, href, setOpen }: any) {
  return (
    <Link
      className="text-4xl font-extrabold font-serif flex justify-center hover:text-white"
      href={href}
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );
}
