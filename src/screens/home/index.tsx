import React, { useState, useEffect } from 'react';
import './styles.css';
import dark from './/darker.png';
import light from './/lighty.png';

export const Home = () => {
    const [theme, setTheme] = useState('light');
    const [text, setText] = useState("");
    const [isToggled, setToggle] = useState(false);
    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
      useEffect(() => {
        const arr = ["We used to date but now we're just friends.","Oh I gotta get on that internet, I'm late on everything!", "You're a nice guy, but I actually only have three friends. I can't really handle any more.", "I can't be with someone like me. I hate myself!", "That's a shame.", "If every instinct you have is wrong, then the opposite would have to be right.", "What could possess anyone to throw a party? I mean, to have a bunch of strangers treat your house like a hotel room.", "She's a sentence finisher. It's like dating Mad Libs.", "Hunger will make people do amazing things. I mean, the proof of that is cannibalism.", "People don't turn down money! It's what separates us from the animals.", "If you want to make a person feel better after they sneeze, you shouldn't say 'God bless you.' You should say, 'You're so good looking!", "Breaking up is like knocking over a Coke machine. You can't do it in one push. You gotta rock it back and forth a few times, and then it goes over.", "My dream is to become hopeless.", "When you look annoyed all the time, people think that you're busy.", "Yeah, I'm a great quitter. It's one of the few things I do well. I come from a long line of quitters.", "You know it's funny, the tomato never took on as a hand fruit.", "This woman hates me so much, I'm starting to like her.", "Borrowing money from a friend is like having sex. It just completely changes the relationship.", "I love a good nap. Sometimes it's the only thing getting me out of bed in the morning.", "Is it possible that I’m not as attractive as I think I am?", "I can't be with someone who doesn't break up nicely. It's an important part of the relationship.", "It's not fair people are seated first come, first served. It should be based on who's hungriest.", "Maybe the dingo ate your baby!", "I'm speechless. I'm without speech.", "Yada yada yada.", "Three squares? You can't spare three squares?", "I hate men, but I'm not a lesbian.", "Moles. Yes, freckles' ugly cousin.", "Boy, these pretzels are making me thirsty.", "Tuesday has no feel! Monday has a feel. Friday has a feel. Sunday has a feel.", "Feels like an Arby's night.", "You got a question? You ask the 8-ball.", "Whenever I'm sad, I stop being sad and be awesome instead.", "The future is scary, but you can't just run back to the past because it's familiar. Yes, it's tempting, but it's a mistake.", "A lie is just a great story that someone ruined with the truth."];
        var i = Math.floor(arr.length * Math.random());
        setText(arr[i])
        document.body.className = theme;
      }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme} style={{position:'absolute', top: '1px', left:'0', backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}>{theme == 'light' ? <img src={dark} style={{width: '30px'}}/> : <img src={light} style={{width: '30px'}}/> }</button>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginLeft: '50%'}}>
          <h1>"{text}"</h1>
          </div>
        </div>
      );
}