import {create} from "zustand"

const toggleGrid = create((set)=>({
    selectedGrid:"list",
    selectGrid:(selectedGrid)=>set({selectedGrid})
}))

export default toggleGrid