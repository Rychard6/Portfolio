import { useEffect, useState } from "react";
import React from "react";
import { Switch } from '@headlessui/react'

export default function NavBar() {
    const [isChecked, setIsChecked] = useState(false);

    function toggleThemeMode(checked) {
        if (checked) {
            localStorage.theme = 'dark';
            setIsChecked(true);
        } else {
            localStorage.theme = 'light';
            setIsChecked(false);
        }
    }

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsChecked(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsChecked(false);
        }
    }, [isChecked]);

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 ${isChecked ? 'dark:bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
            <div className="flex w-full h-16 justify-between items-center px-4 md:px-32">
                <div>
                    <h1 className={`${isChecked ? 'text-gray-100' : 'text-gray-800'} text-xl`}>Portfólio</h1>
                </div>
                <div className="flex items-center">
                    <Switch
                        checked={isChecked}
                        onChange={(checked) => toggleThemeMode(checked)}
                        className="ml-1 relative inline-flex w-12 h-6 shadow-md cursor-pointer rounded-full items-center focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-700 focus:ring-gray-900"
                    >
                        <span className="sr-only">Toggle theme</span>
                        <span className={`${isChecked ? 'translate-x-7' : 'translate-x-1'} pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-md ring transition duration-200 ease-in-out`} />
                    </Switch>
                    <a
                        href="https://drive.google.com/uc?export=download&id=19-mQiZMMIiObq8mS-xMclJP9uMXPsr85"
                        target="_blank"
                        className="flex items-center justify-center cursor-pointer ml-4 text-white text-lg bg-custom w-24 h-9 rounded-xl font-semibold"
                        style={{ backgroundImage: 'radial-gradient(circle, rgba(105, 239, 251, 1) 0%, rgba(163, 248, 251, 0.9023984593837535) 50%)' }}
                    >
                        Currículo
                    </a>
                </div>
            </div>
        </div>
    );
}
