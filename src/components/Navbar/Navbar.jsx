import React, { useContext, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import Darkmode from "./Darkmode";
import { Link, NavLink } from "react-router-dom";
import { isActive } from "@tiptap/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { ShopContext } from "../Context/ShopContext";
import { BsFillArchiveFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth";
import instance from "../../../api";
import { Tooltip, Button } from "@mantine/core";

import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [DropdownLink, setDropdownLink] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [auth, setAuth] = useAuth();
  const getAllCategory = async () => {
    try {
      const res = await instance({
        url: `/category/allcategory`,
        method: "GET",
      });
      // const sortedCategory = res.data.category.sort((a, b) =>
      //   a.name.localeCompare(b.name)
      // );
      setDropdownLink(
        res.data.category.sort((a, b) => a.name.localeCompare(b.name))
      );
    } catch (error) {
      console.log(error);
    }
  };
  console.log(DropdownLink);

  // let allcategory = [];
  // const addCategory = () => {
  //   let category = [];
  //   if (DropdownLink.length) DropdownLink.map((i) => category.push(i.name));
  //   return allCategory.push([...category]);
  // };
  // addCategory();
  // console.log(allcategory);

  useEffect(() => {
    getAllCategory();
  }, []);

  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200  z-40  fixed top-0 right-0 left-0">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* logo and link section */}
          <div className="flex  items-center gap-7">
            <NavLink
              to="/"
              className="text-primary  tracking-widest  uppercase sm:text-3xl"
            >
              <img className="w-[100px] h-[50px]" src={logo} alt="" />
            </NavLink>
            {/* menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-5">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-red-400 text-[18px]" : "text-[18px]"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? "text-red-400 text-[18px]" : "text-[18px]"
                  }
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-red-400 text-[18px]" : "text-[18px]"
                  }
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-red-400 text-[18px]" : "text-[18px]"
                  }
                >
                  Contact
                </NavLink>

                <li className="relative cursor-pointer group  ">
                  <a className=" navbar text-[18px] flex ">
                    <span className="navbar flex items-center text-[18px] mt-1">
                      Catalog
                      <IoMdArrowDropdown />
                    </span>
                  </a>
                  <div className="absolute z-[9999] hidden group-hover:block">
                    <ul className="space-y-1 bg-white w-[200px] rounded-lg">
                      {DropdownLink.map((data, index) => (
                        <li key={index}>
                          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                          <p
                            className="text-[16px] inline-block w-full p-1 hover:text-gray-600 hover:bg-whitesmoke dark:text-black dark:hover:text-gray-600"
                            onClick={() => {
                              console.log(data.name);
                              navigate(
                                `/shopByCategory/${data.name.replace(
                                  / /g,
                                  "-"
                                )}`
                              );
                            }}
                          >
                            {data.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* navbar right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search bar section */}
            {/* <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <FaSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div> */}
            {/* order button section */}
            <Tooltip className="bg-red-500" label="Carts">
              <NavLink to="/cart" type="button" className="relative p-3">
                <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  {getTotalCartItems()}
                </div>
              </NavLink>
            </Tooltip>
            <Tooltip className="bg-red-500" label="Wishlist">
              <NavLink to="/wishlist" type="button" className="relative p-3">
                <GrFavorite className="text-xl text-gray-600 dark:text-gray-400" />
              </NavLink>
            </Tooltip>

            {auth?.token && (
              <Tooltip className="bg-red-500" label="Orders">
                <NavLink to="/myorder" type="button" className="relative p-3">
                  <BsFillArchiveFill className="text-xl text-gray-600 dark:text-gray-400" />
                </NavLink>
              </Tooltip>
            )}
            {!auth.token ? (
              <Tooltip label="Login" className="bg-red-500">
                <NavLink to="/login" type="button" className="relative p-3">
                  <button type="button">
                    <RiAccountCircleLine
                      size={25}
                      className=" text-gray-600 dark:text-gray-400"
                    />
                  </button>
                </NavLink>
              </Tooltip>
            ) : (
              <button
                type="button"
                className="bg-white w-[80px] h-[30px] outline-black border  dark:text-white dark:bg-black hover:bg-red-700 duration-[3000ms]"
                onClick={() => {
                  localStorage.removeItem("auth");
                  setAuth({
                    message: "",
                    token: "",
                  });
                }}
              >
                Logout
              </button>
            )}
            {/*  darkmode section */}
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
