import React from "react";

const Page = ({ params } : { params: { letter: string }}) => {
  const { letter } =  params;
  return (<h1>Letter Title: {letter}</h1>)
};

export default Page;