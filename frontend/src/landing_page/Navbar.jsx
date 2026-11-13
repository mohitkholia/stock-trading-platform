import { useState } from "react";
import { Link } from "react-router";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", path: "http://localhost:5174/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #dee2e6",
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center p-2 page-container">
        <Link to="/" className="shrink-0">
          <img
            src="/media/images/logo.svg"
            className="w-1/4"
            alt="Logo"
          />
        </Link>

        <IconButton
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="ml-auto min-[992px]:!hidden"
          sx={{ color: "#555" }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <ul className="ml-auto hidden items-center min-[992px]:flex">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="block px-2 py-2 text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Collapse
          in={open}
          className="w-full min-[992px]:!hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block px-2 py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </AppBar>
  );
}

export default Navbar;