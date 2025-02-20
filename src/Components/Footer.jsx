import React from "react";

const Footer = () => {
    return (
        <footer className="w-full text-center py-1 bg-gray-800 text-gray-400 font-thin">
            © {new Date().getFullYear()} daniel. All rights reserved.
        </footer>
    );
};

export default Footer;
