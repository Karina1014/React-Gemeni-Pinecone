import React, { createContext, useState } from "react";
import runChat from "../components/config/gemeni";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");



  const onSent = async () => {
    setResultData("");
    setLoading(true); // Puedes mostrar un indicador de carga
    setShowResult(true);
    setRecentPrompt(input);
    const response = await runChat(input);  // Asegúrate de que 'runChat' devuelve la respuesta correctamente
    setResultData(response);
    setLoading(false);
    setRecentPrompt(input);
   
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
