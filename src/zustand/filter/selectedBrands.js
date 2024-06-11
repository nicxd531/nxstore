import {create} from "zustand"

const selectedBrands = create((set)=>({
    selectedBrandsD:{Pocco:true },
    selectBrands:(selectedBrandsD)=>set({selectedBrandsD})
}))

export default selectedBrands