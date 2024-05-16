"use client"
import HomeSection1 from "@/components/home/HomeSection1";
import HomeSection2 from "@/components/home/HomeSection2";
import HomeSection3 from "@/components/home/HomeSection3";
import HomeSection4 from "@/components/home/HomeSection4";
import HomeSection5 from "@/components/home/HomeSection5";
import HomeSection6 from "@/components/home/HomeSection6";
import sendTheme from "@/zustand/sendTheme";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  const{selectedTheme}=sendTheme()
  
  return (
    <main className="h-100" >
        <HomeSection1 />
        <HomeSection2/>
        <HomeSection3/>
        <HomeSection4/>
        <HomeSection5/>
        <HomeSection6/>
    </main>
  );
}
