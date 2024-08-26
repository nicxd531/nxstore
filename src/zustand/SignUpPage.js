import {create} from "zustand"

const signUpPage = create((set)=>({
    currentPage:0,
    nextPage:(currentPage)=>set({currentPage})
}))

export default signUpPage