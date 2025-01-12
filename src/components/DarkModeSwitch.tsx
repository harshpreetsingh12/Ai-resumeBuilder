'use client'

import React from 'react'
import { useTheme } from "./ThemeContext";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { Button } from './ui/button';
import { Sun } from 'lucide-react';

const DarkModeSwitch = () => {
    const {isDark, toggleTheme} =useTheme();

    const theme= isDark?'dark':'light'
  return (
    <Select value={theme} onValueChange={toggleTheme}>
        <SelectTrigger className=''>
            <Sun className="h-4 w-4" />
        </SelectTrigger>

        <SelectContent>
        <SelectItem value={'dark'}>Dark</SelectItem>
        <SelectItem value={'light'}>Light</SelectItem>
        </SelectContent>
  </Select>
  )
}

export default DarkModeSwitch
