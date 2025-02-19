import React from "react";

const Footer = () => {
    return (
        <footer className="w-full text-center py-4 bg-gray-800 text-white">
            © {new Date().getFullYear()} daniel. All rights reserved.
        </footer>
    );
};

export default Footer;
