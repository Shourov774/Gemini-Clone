import React, { useContext, useState } from "react";
import "./main.css";
import { assets } from "../assets/assets";
import { Context } from "../context/context";
import Loading from "./loading";
import Massege from "./massage";
import Input from "./input";

const Main = ({ onAddQuestion }) => {
    const para = ["Suggest beautiful places to see on an upcoming road trip","Briefly summarize this concept: urban planning","Brainstarm team bonding activities for our work retreat","Improve the readability of the following code"]
    const [question, setQuestion] = useState("");
    const { loading, resultData, showresult, onSent} = useContext(Context);
    const handleAddQuestion = (newQues) => {
        setQuestion(newQues);
        onAddQuestion(newQues)
    }
    
    return (
        <div className="main">
            <div className="nav">
                <p className="gemini">SR-Assistant</p>
                <img src={assets.user_icon} alt="User" className="user" />
                
            </div>
            <div className="conversation">
                <div className="genimi-message">
                    <div className={showresult? "invisible" : loading? "invisible" : undefined}>
                        <h1><span className="span">Hello Devl..</span>
                        <p>How can I help you today?</p></h1>
                        
                        <div className="cards">
                            <div className="card">
                                <p>{para[0]}</p>
                                <img src={assets.compass_icon} alt="bulb" />
                            </div>
                            <div className="card">
                                <p>{para[1]}</p>
                                <img src={assets.bulb_icon} alt="bulb" />
                            </div>
                            <div className="card">
                                <p>{para[2]}</p>
                                <img src={assets.message_icon} alt="bulb" />
                            </div>
                            <div className="card">
                                <p>{para[3]}</p>
                                <img src={assets.code_icon} alt="bulb" />
                            </div>
                            
                        </div> 
                    </div>
                    <>
                        {loading || showresult ? <div className="user-question">
                            <img src={assets.user_icon} alt="user :" className="user" />
                            <h3>{question}</h3>
                            </div> : null}
                            {loading || showresult ?<div className="show-massege">
                            <img src={assets.gemini_icon} alt="" height={"30px"}/>
                            <div className = {loading ? undefined : "invisible"}>
                                <Loading />
                            </div>
                            <div className={showresult && !loading ? undefined : "invisible"}>
                                <Massege />
                            </div>
                        </div> :null}
                        
                    </>
                </div>

                <>
                    <Input onAddQuestion = { handleAddQuestion }/>
                </>
            </div>
            
        </div>
    )
}

export default Main;