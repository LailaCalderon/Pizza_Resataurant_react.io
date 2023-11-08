"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";


const links = [
  { id: 1, title: "Inicio", url: "/" },
  { id: 2, title: "Conocenos", url: "/" },
  { id: 3, title: "Menú", url: "/" },
  { id: 4, title: "Ordenar", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      
     { open && ( <div className="bg-red-900 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-center z-10">
        {links.map((item) => (
          <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
            {item.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
        ) : (
          <Link href="/Pedidos" onClick={()=>setOpen(false)}>Pedidos</Link>
        )}
        <Link href="/cart" onClick={()=>setOpen(false)}>
            <CartIcon/>
        </Link>
      </div>)}
    </div>
  );
};

export default Menu;
