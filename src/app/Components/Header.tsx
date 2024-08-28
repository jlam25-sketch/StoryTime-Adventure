"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="bg-orange-200">
        <div className="container flex-wrap p-2 flex-col md:flex-row items-center">
          <div>
            <header style={headerStyle}>
              <motion.div
                style={leftContinerstyle}
                transition={{ type: "spring", damping: 18, mass: 0.75 }}
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <img
                  src="/assets/STA-logo.gif"
                  alt="company logo"
                  height={100}
                  width={100}
                ></img>
                <h1 style={bookTitleStyle}>StoryTime Adventure</h1>
              </motion.div>
              <motion.div
                style={rightContainerStyle}
                transition={{ type: "spring", damping: 18, mass: 0.75 }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Link href="/profile" style={avatarLinkStyle}>
                  <motion.img
                    src="\assets\20240102_192819.jpg"
                    alt="avatar"
                    style={avatarStyle}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                  />
                </Link>
                <section className="flex items-center justify-between px-4 py-3 bg-orange-250 ">
                  <div>
                    <button
                      type="button"
                      className="block text-purple-400 hover:text-white focus:text-white focus:outline-none"
                    >
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      </svg>
                    </button>
                  </div>
                </section>
              </motion.div>
            </header>
          </div>
        </div>
      </nav>
    </>
  );
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 1re 1rem 0",
  color: "#fff",
};

const leftContinerstyle = {
  display: "flex",
  alignItems: "center",
  padding: "1rem 1re 1rem 0",
};

const bookTitleStyle = {
  marginRight: "2rem",
  color: "#E3F2FD",
  fontSize: "2rem", // Ensure proper H1 size
  fontWeight: "bold", // Added for better visual
};

const rightContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const avatarLinkStyle = {
  marginRight: "1rem",
};

const avatarStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "60%",
};

export default Header;
