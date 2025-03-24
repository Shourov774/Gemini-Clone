import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import { assets } from "../assets/assets";

const Input = ({ onAddQuestion }) => {
    const { input, onSent, setInput } = useContext(Context);
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = () => {
        onAddQuestion(input);        
    }
    return <div className="input-container">
                        <img src={assets.plus_icon} alt="plus" />
                        <input type="text" placeholder="Ask anithing..." onChange={handleChange} value={input} />
                        {
                            input ? <img src= {assets.send_icon} alt="send" onClick={() => { setInput(""); onSent(); handleSubmit()}}/> 
                            : <img src= {assets.mic_icon} alt="mic" />
                        }
                    </div>
}

export default Input;