import { createCustomElement } from "../../shared/utilities/helper-functions";


const regUppercase = /^(?=.*[A-Z])/;
const regLowercase = /^(?=.*[a-z])/;
const regLetters =/^(?=.*[A-Z])(?=.*[a-z])/;
const regNumbers = /^(?=.*[0-9])/;
const regSpecial = /^(?=.*[!@#$%^&*])/;
const regSpace = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{5,})/;

export const checkPassword = (value: string): Array<string>=> {
    const result: Array<string> = [];
    if (value.length < 8){
        result.push('Password must be at least 8 characters long');
    }
    if(!regUppercase.test(value)){
        result.push('Password must contain at least one uppercase letter (A-Z)');
    }
    if(!regLowercase.test(value)){
        result.push('Password must contain at least one lowercase letter (a-z)');
    }
    if(!regNumbers.test(value)){
        result.push('Password must contain at least one digit (0-9)');
    }
    if(!regSpecial.test(value)){
        result.push('Password must contain at least one special character (e.g., !@#$%^&*)');
    }
    if(!regSpace.test(value)){
        result.push('Password must not contain leading or trailing whitespace');
    }
    return result;
}

export const checkName =(value: string): Array<string> => {
    const result: Array<string> = [];
    if (value.length < 1){
        result.push('Name must be at least 1 character long');
    }
    if(!regLetters.test(value)){
        result.push('Name must not contain special characters or numbers');
    }
    return result;
}

export const checkSurname =(value: string): Array<string> => {
    const result: Array<string> = [];
    if (value.length < 1){
        result.push('Surname must be at least 1 character long');
    }
    if(!regLetters.test(value)){
        result.push('Surname must not contain special characters or numbers');
    }
    return result;
}

export const checkBirth =(value: string): boolean=> {
    const date = new Date(value);
    const difference:number = (+(new Date().getTime() - +(date)) / (24 * 3600 * 365.25 * 1000));
    return difference >= 13;
}

export const writeErrors = (errors: Array<string>): HTMLElement => {
    const container = createCustomElement('ul',['']);
    for (let i=0; i< errors.length; i += 1){
        const li = createCustomElement('li',['small-text']);
        li.classList.add('small-visible');
        li.innerHTML = errors[i];
        container.append(li);
    }
    return container;
}