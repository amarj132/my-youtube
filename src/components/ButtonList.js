import React from "react";
import { Button } from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((lists) =>   ( 
        <Button key={lists} name={lists} />
      ))}
    </div>

    // <div className='flex'>
    //   <Button name="All" />
    //   <Button name="Gaming" />
    //   <Button name="Songs"/>
    //   <Button name="Live"/>
    //   <Button name="Soccer"/>
    //   <Button name="Cricket"/>
    //   <Button name="Cooking"/>
    //   <Button name="Valentines"/>
    //   <Button name="Soccer"/>
    //   <Button name="Cricket"/>
    //   <Button name="Cooking"/>
    //   <Button name="Valentines"/>
    // </div>
  );
};

export default ButtonList;
