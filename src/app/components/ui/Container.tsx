'use client';
import { useContext } from "react";
import { ThemeContext,ThemeContextProvider } from "@/lib/context";
type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  const themeContext = useContext(ThemeContext);
  
  return (

        <html className={themeContext?.theme}>
              {children}
        </html>

  );
    
};


export default Container;
