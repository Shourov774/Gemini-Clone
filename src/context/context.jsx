import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [showresult, setShowresult] = useState(false);
    const [resultData, setResulData] = useState("");

    const onSent =  async (params) => {
        setLoading(true);
        let newFormate ;
        const response = await run(input);
        let responseArray = response.split(/(\*\*.*?\*\*|\*)/g);
        
        newFormate =responseArray.map((text,i) => {
            if (text.startsWith("**") && text.endsWith("**")) {
                return <strong key={i}>{text.slice(2,-2)}</strong>
            }else if (text === "*") {
                return(<><br key={i}/><br /></>)
            }else {
                return text
            }
        })
        
        setResulData(newFormate);
        setLoading(false);
        setShowresult(true);
    }

    const ContextValue = {
        input,
        setInput,
        onSent,
        loading,
        resultData,
        showresult
    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;