import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 to-black text-white shadow-lg px-6 py-4 flex items-center justify-between">
      {/* عنوان سایت */}
      <Link href="/" className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        MyBlog
      </Link>

      {/* لینک‌های منو */}
      <div className="md:flex space-x-6">
        <Link href="/" className="hover:text-cyan-400 transition-colors duration-300">
          Home
        </Link>
        <Link href="/blogs" className="hover:text-cyan-400 transition-colors duration-300">
          Blogs
        </Link>
        <Link href="/create-blog" className="hover:text-cyan-400 transition-colors duration-300">
          Create
        </Link>
      </div>

      {/* دکمه ورود یا پروفایل */}
      <button className="hidden md:block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
        Sign in
      </button>
    </nav>
  );
}

export default Navbar;
