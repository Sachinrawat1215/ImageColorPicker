import { useState } from "react";

const Header = (props) => {
    // Decalring all states
    const [headtext, setheadtext] = useState('Dark');
    const [path, setpath] = useState('Images/night.png');
    const [bgcolor, setbgcolor] = useState('white');
    const [txtcolor, settxtcolor] = useState('black');

    // Setting Header UI on black theme
    const changeTheme = () => {
        if (headtext === 'Dark') {
            setheadtext('Light');
            setpath('Images/sun.png');
            setbgcolor('black');
            settxtcolor('white');
            props.updateTheme();
            document.body.style.backgroundColor = 'black';
        } else if (headtext === 'Light') {
            setheadtext('Dark');
            setpath('Images/night.png');
            setbgcolor('white');
            settxtcolor('black');
            props.updateTheme();
            document.body.style.backgroundColor = '#f1f2f6';
        }
    }

    return (
        <header style={{ backgroundColor: bgcolor, color: txtcolor }}>
            <div className="head-container">
                <div className="logo">
                    <img src="Images/color-picker.png" alt="logo" />
                    <h1>Image Color Picker</h1>
                </div>
                <div className="theme" onClick={changeTheme}>
                    <img src={path} alt="night_theme" />
                    <p>{headtext} Mode</p>
                </div>
            </div>
        </header>
    );
};

export default Header;