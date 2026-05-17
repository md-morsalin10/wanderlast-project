"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/Wanderlast.png"
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const handleSignout = async () => {
    await authClient.signOut();
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destination" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Add Destination", path: "/add-destination" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10 py-3 transition-all">
      <nav className="flex items-center justify-between container mx-auto px-4 md:px-0">

        {/* Logo Section */}
        <div className="shrink-0">
          <Link href={"/"}>
            <Image
              src={logo}
              height={120}
              width={120}
              alt="logo"
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 font-medium text-cyan-500">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`transition-all duration-300 pb-1 ${
                  pathName === link.path
                    ? "font-bold border-b-2 border-cyan-400"
                    : "hover:text-cyan-300"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side: Profile & Auth */}
        <div className="hidden lg:flex items-center gap-5">
          <Link 
            href={"/profile"} 
            className={`transition-colors text-cyan-500 ${pathName === "/profile" ? "border-b-2 border-cyan-500 font-bold" : " hover:text-cyan-300"}`}
          >
            Profile
          </Link>
          
          {user ? (
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 border border-white/20">
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  src={user?.image}
                  alt={user?.name}
                />
                <Avatar.Fallback className="bg-cyan-500 text-white">
                  {user?.name?.[0]?.toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignout} variant="danger" className="rounded-none px-4 font-semibold">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4 text-white font-medium">
              <Link href={"/login"} className="hover:text-cyan-400 transition-colors">Login</Link>
              <Link href={"/signup"} className="bg-cyan-500 px-5 py-2 text-white hover:bg-cyan-600 transition-all font-semibold">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-cyan-500 p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoMdClose  size={30} /> : <MdOutlineMenu size={30} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl">
          <ul className="flex flex-col gap-6 text-white text-lg">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={toggleMenu}
                  className={`block py-1 ${pathName === link.path ? "text-cyan-400 font-bold" : "hover:text-cyan-300"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            
            <hr className="border-white/10" />
            
            <li>
              <Link 
                href={"/profile"} 
                onClick={toggleMenu}
                className={pathName === "/profile" ? "text-cyan-400 font-bold" : ""}
              >
                Profile
              </Link>
            </li>

            {user ? (
              <li className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <Avatar.Image src={user?.image} alt={user?.name} />
                  </Avatar>
                  <span className="text-sm text-gray-300 italic">{user.name}</span>
                </div>
                <Button onClick={handleSignout} variant="danger" className="w-full font-bold">
                  Logout
                </Button>
              </li>
            ) : (
              <li className="flex flex-col gap-4 pt-2">
                <Link href={"/login"} onClick={toggleMenu} className="text-center py-2 border border-white/20">Login</Link>
                <Link href={"/signup"} onClick={toggleMenu} className="bg-cyan-500 text-center py-2 font-bold hover:bg-cyan-600">Sign Up</Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;