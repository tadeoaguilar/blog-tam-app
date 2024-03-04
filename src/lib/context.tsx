import React, { FC, PropsWithChildren, createContext } from 'react';
import { useState } from 'react';

interface IThemeContext {
    theme: string ;
    setTheme: React.Dispatch<React.SetStateAction<IThemeContext['theme']>>;
}

const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeContextProvider = ({children}:React.PropsWithChildren) => {
    const [theme, setTheme] = useState<IThemeContext['theme']>("light");
 
    return(<>
        <ThemeContext.Provider value={ {theme:theme, setTheme: setTheme}  }>
            {children}
        </ThemeContext.Provider>
    </>)
};

export { ThemeContext, ThemeContextProvider };


