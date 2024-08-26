"use client";
import { Steps } from "rsuite";
import signUpPage from "../../../zustand/SignUpPage"
interface myComponentProps {
  page:number
}
export default function StepperBar({page}:myComponentProps) {
  const {currentPage,nextPage}=signUpPage()
  const handlePageChange = (pgNo:number) => {
    nextPage(pgNo) ;
  };
  return (
    <Steps style={{width:"100%"}} current={page} small>
      <Steps.Item onClick={()=>handlePageChange(0)} style={{cursor:'pointer'}}/>
      <Steps.Item onClick={()=>handlePageChange(1)} style={{cursor:'pointer'}}/>
      <Steps.Item onClick={()=>handlePageChange(2)} style={{cursor:'pointer'}}/>
      <Steps.Item onClick={()=>handlePageChange(3)} style={{cursor:'pointer'}}/>
    </Steps>
  );
}
