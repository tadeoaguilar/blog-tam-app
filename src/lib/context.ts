import { createContext } from 'react';
import { useState } from 'react';

const dispatchUserEvent = (actionType: string, payload:string) => {
    const [theme, setTheme] = useState('light');
    switch (actionType) {
        case 'UPDATE':
            setTheme(payload);
            return;
        
        
        default:
            setTheme("light");
            return;
    }
};

export const ThemeContext = createContext('light');
