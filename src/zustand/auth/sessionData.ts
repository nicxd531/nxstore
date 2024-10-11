import {create} from "zustand"

const sessionData = create((set)=>({
    userData:{
        email:"",
        password:"",
    },
    AddUserData:(userData:any)=>set({userData})
}))

export default sessionData