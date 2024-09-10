import React, { useEffect } from 'react';

function Toggle() {
    useEffect(() => {
        // Function to handle body click for dark mode
        function switchToDarkMode() {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            document.querySelector("#darkmode").style.display = "none";
            document.querySelector("#lightmode").style.display = "block";
            document.querySelector("nav").classList.remove("bg-dark");
            document.querySelector("nav").classList.add("bg-light");
            document.querySelector("nav").setAttribute("data-bs-theme", "light");
        }

        // Function to handle body click for light mode
        function switchToLightMode() {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.querySelector("#lightmode").style.display = "none";
            document.querySelector("#darkmode").style.display = "block";
            document.querySelector("nav").classList.remove("bg-light");
            document.querySelector("nav").classList.add("bg-dark");
            document.querySelector("nav").setAttribute("data-bs-theme", "dark");
        }

        // Adding event listeners
        const darkModeButton = document.querySelector("#darkmode");
        const lightModeButton = document.querySelector("#lightmode");

        if (darkModeButton) {
            darkModeButton.addEventListener("click", switchToDarkMode);
        }

        if (lightModeButton) {
            lightModeButton.addEventListener("click", switchToLightMode);
        }

        // Cleanup function to remove event listeners
        return () => {
            if (darkModeButton) {
                darkModeButton.removeEventListener("click", switchToDarkMode);
            }

            if (lightModeButton) {
                lightModeButton.removeEventListener("click", switchToLightMode);
            }
        };
    }, []);

    return (
        <div className="toggle">
            <svg id="darkmode" style={{ width: '30px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
            </svg>
            <svg id="lightmode" style={{ width: '30px', display: 'none' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
        </div>
    );
}

export default Toggle;
