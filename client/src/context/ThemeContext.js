import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()
export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('light')
    const toogleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#f8f9fa' : '#121212'
        document.body.style.color = theme === 'light' ? '#212529' : '#f8f9fa'
    }, [theme])

    return(
        <ThemeContext.Provider value={{theme,toogleTheme}}>
            <div className={theme === 'light' ? 'bg-light text-dark' : 'dg-dark text-light'} style={{minHeight:'100vh'}}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)