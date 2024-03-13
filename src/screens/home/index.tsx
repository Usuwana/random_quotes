import React, { useState, useEffect } from 'react';
import './styles.css';
import dark from './/darky.png';
import light from './/light.png';

export const Home = () => {
    const [theme, setTheme] = useState('light');
    const [isToggled, setToggle] = useState(false);
    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        document.body.className = theme;
      }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>{theme == 'light' ? <img src={light}/> : <img src={dark}/> }</button>
          <h1>Hello, world!</h1>
        </div>
      );
}