import React from "react";

const Header = () => {
    return (
        <div>
            <div id="header"
                 style={{
                     width: "100vw",
                     position: "fixed",
                     background: "#212529",
                     top: 0,
                     display: "flex",
                     alignItems: "center",
                     padding: "1.5rem",
                     zIndex: 10,
                 }}
            >
                <span className="text-xl text-white font-bold" style={{ marginRight: "auto" }}>AGROMARKET</span>
                <div style={{ display: "flex", gap: "2rem" }}>
                    <a href="/">Home</a>
                    <a href="/crearProducto">Crear Producto</a>
                    <a href="/updateProduct">Editar/Eliminar</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
