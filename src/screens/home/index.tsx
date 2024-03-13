import React, { useState, useEffect } from 'react';
import './styles.css';
import dark from './/darker.png';
import light from './/lighty.png';

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
            <button onClick={toggleTheme} style={{position:'absolute', top: '1px', left:'0', backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}>{theme == 'light' ? <img src={dark} style={{width: '30px'}}/> : <img src={light} style={{width: '30px'}}/> }</button>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <h1>[Movie quote here]</h1>
          </div>
        </div>
      );
}