import {create} from "zustand"

const sendTheme = create((set)=>({
    selectedTheme:"dark",
    selectTheme:(selectedTheme)=>set({selectedTheme})
}))

export default sendTheme