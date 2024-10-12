/** @format */
"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Services",
            path: '/services'
        },
        {
            title: "Contacts",
            path: '/contacts'
        },
    ]

    const handler = () => {
        router.push('/services')
    }
   return (
      <nav className="bg-red-500 px-6 py-4 flex justify-between items-center">
         <h6 className="text-2xl"> Next <span className="text-cyan-500 font-bold text-3xl">Hero</span> </h6>
         <ul className=" flex justify-between items-center space-x-4 text-white">
             {
                links?.map((link) => <Link className={`${pathName === link.path && "text-cyan-300"}`} key={link.path} href={link.path}> {link.title} </Link>)
             }
         </ul>
         <button onClick={handler} className= "btn btn-primary bg-green-400 p-4 rounded-2xl">Login</button>
      </nav>
   );
};

export default Navbar;
