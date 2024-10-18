"use client";
import React from "react";
import {IKImage} from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const Image =(props: any)=>{
    return <IKImage urlEndpoint={urlEndpoint} {...props}/>;
};
export default Image