'use client'

import React from 'react'
import { useTheme } from "./ThemeContext";
import { Moon, Sun } from 'lucide-react';

const DarkModeSwitch = () => {
    const {isDark, toggleTheme} =useTheme();

    const toggleColor= isDark?'white':'black'

    return (
      <div onClick={()=>toggleTheme(!isDark)} className='p-4 cursor-pointer'>
        {isDark ?
        <Sun className="h-4 w-4"  color={toggleColor}/>
        :
          <Moon className='h-4 w-4' color={toggleColor}/>
        }
      </div>
    )
}

export default DarkModeSwitch
