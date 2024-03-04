import  {  PropsWithChildren, createContext, useState } from 'react';


interface ITheme{
    theme: string ;
    
}
export type ThemeContextType = {
    theme: string;
    updateTheme: (item:string) => void;
  };

const ThemeContext = createContext<ThemeContextType | null>(null )

const ThemeContextProvider = ({children}:PropsWithChildren) => {
    const [theme, setTheme] = useState<ITheme['theme']>("light");
    const updateTheme = (item:ITheme['theme']) => {
        setTheme(item);
      }
 
    return(<>
        <ThemeContext.Provider value={ {theme:theme, updateTheme: updateTheme}  }>
            {children}
        </ThemeContext.Provider>
    </>)
};

export { ThemeContext, ThemeContextProvider };


