import { create } from 'zustand'

const darkModeZustand = create((set) => ({
    darkMode: localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')) : false,
    toggleDarkMode: () => set((state) =>{
        localStorage.setItem('darkMode', JSON.stringify(!state.darkMode))
        return{ darkMode: !state.darkMode }
        }),
}))

export default darkModeZustand