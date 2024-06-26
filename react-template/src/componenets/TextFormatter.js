import React, { createContext, useContext } from "react";
import textListEn from "../i18en.json";
const LanguageContext = createContext('en');
//Author: prasadj
//Funcationality:To keeep all the labels centralized we will be using this external text provider to populate all text details within the application
const TextFormatter = ({placeholder}) => {
    const lang = useContext(LanguageContext);
    const textList = lang === 'en' ? textListEn : textListEn; //change second option in future for another language
    const text = textList[placeholder] !== "undefined"? textList[placeholder] : placeholder;
    console.log(textList[placeholder]);
    return <React.Fragment>{text}</React.Fragment>;
}

export default TextFormatter;