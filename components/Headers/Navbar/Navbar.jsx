import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiCubeTransparent, HiHome } from "react-icons/hi";

const HeaderMenu = [
    {menu: "Home", href: "/"},
    {menu: "About", href: "/about"},
    {menu: "Marketplace", href: "/marketplace"},
]

const Navbar = () => {
  return (
    <>
    <nav className="flex p-3 items-center justify-between">
        <div className="flex gap-2 items-center justify-start font-black text-3xl text-neutral-800">
            <HiCubeTransparent/>
            {/* <Image src="/images/logo.png" alt="cryptolancer" width="100px" height="40px"/> */}
            CRYPTOLANCER
        </div>
        <div className="flex gap-2 items-center justify-end ">
            <div className="hidden md:flex gap-2 font-semibold text-md text-neutral-800">
                {HeaderMenu.map((menu) => {
                    return (
                        <>
                        <Link href={menu.href} passHref>
                            <div className="flex align-center gap-2 p-2 hover:bg-neutral-100 rounded-3xl">
                               <div>{menu.menu}</div>
                            </div>
                        </Link>
                        </>
                    )
                })}
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar