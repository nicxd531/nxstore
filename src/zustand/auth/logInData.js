import {create} from "zustand"

const logInData = create((set)=>({
    userData:{
        email:"",
        password:"",
    },
    AddUserData:(userData)=>set({userData})
}))

export default logInData