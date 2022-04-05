import { useState, useEffect } from "react"; //keep track of bits of state in the app
import ColourPicker from "../components/ColourPicker";
import ColourDisplay from "../components/ColourDisplay";

const ColourPickerContainer = () => {

    const [red, setRed] = useState(50);
    const [green, setGreen] = useState(50);
    const [blue, setBlue] = useState(50);
    const [rgb, setRgb] = useState(null);

    useEffect(() => {
        console.log("useEffect called");

        let red255 = Math.ceil(red * 2.55);
        let gree255 = Math.ceil(green * 2.55);
        let blue255 = Math.ceil(blue * 2.55);

        setRgb(`rgb(${red255}, ${gree255}, ${blue255})`);
    },[red, green, blue]);

    const updateRed = (event) => {
        setRed(event.target.value);
    }

    const updateGreen = (event) => {
        setGreen(event.target.value);
    }

    const updateBlue = (event) => {
        setBlue(event.target.value); //something wrong
    }

    return(
        <>
            <h1>Colour Picker App</h1>
            <ColourPicker
                red={red}
                green={green}
                blue={blue}
                onRedChange={updateRed}
                onGreenChange={updateGreen}
                onBlueChange={updateBlue} />
            
             <ColourDisplay rgb={rgb}/>
        </>
    )   
    
}

export default ColourPickerContainer;