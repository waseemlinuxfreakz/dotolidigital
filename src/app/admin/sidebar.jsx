"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import {
  FiLogOut,
  FiHome,
  FiFileText,
  FiFolder,
  FiX,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import Image from "next/image";

export default function Sidebar({ isOpen, toggle, close }) {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(""); // NEW

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? "" : menu));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* ✅ Logo + Mobile Close Button */}
      <div className="sidebar-header">
        <Link href="/admin/dashboard" className="logo">
          <Image src="/images/logo.png" alt="logo" width={128} height={43} />
        </Link>
        <button
          className="toggle-btn mobile-only"
          onClick={(e) => {
            e.stopPropagation();
            close();
          }}
        >
          <FiX />
        </button>
      </div>

      {/* ✅ Navigation */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link href="/admin/dashboard">
              <FiHome /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/admin/blog">
              <FiFileText /> <span>Blog</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* ✅ Logout */}
      <div className="logout-section">
        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut /> <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
