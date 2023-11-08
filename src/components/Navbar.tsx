import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-900 p-4 flex items-center justify-between border-b-2 border-b-red-900 uppercase md:h-24 lg:px-20 lx:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Inicio</Link>
        <Link href="/">Conócenos</Link>
        <Link href="/menu">Menú</Link>
      </div>

      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Pizzarella</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className=" md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-red-300 px-1 rounded-md">
            <Image src="/phone.png" alt="" width={20} height={20}/>
            <span>123 456 789</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Pedidos</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;
