import {create} from "zustand"

const signUpData = create((set)=>({
    newUserData:{
        surName:"",
        firstName:"",
        userName:""
    },
    AddUserData:(newUserData)=>set({newUserData})
}))

export default signUpData