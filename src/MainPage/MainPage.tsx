import React, { useEffect, useState } from "react";
import   "./MainPage.css";

// START - DO NOT EDIT
function useRandomNumber() {
  const randomNumber = Math.trunc(Math.random() * 1000);
  return randomNumber;
}
// END - DO NOT EDIT

const startTime = Date.now();
function useGetTimer() {
  const [time, setTime] = React.useState<string>("0");

  React.useEffect(() => {
    const intervalRef = window.setInterval(() => {
      const now = Date.now();

      setTime((Math.abs(now - startTime)/1000).toFixed(0));
    }, 1000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return time;
}


const Content: React.FC<{
  open: any;
}> = (props) => {
  // START - DO NOT EDIT
  const randomNumber = useRandomNumber();
  // END - DO NOT EDIT
  return <div className="random-label">{props.open.value ? <>Your random number is  <span className="highlight"><samp>{randomNumber}</samp></span></>: `` }</div>;
};


//Displaypageloaded 
const DisplayPageLoadedSince: React.FC = () => {
  const time = useGetTimer();
  return (
      <div>
        The page loaded <span className="highlight">{time} seconds</span> ago
      </div>
    
  );
};

//ButtonToggle
const ButtonToggle: React.FC = () => {
  const [open, setOpen] = React.useState({ value: false });
  return (
    <>
      <button
        className={!open.value ? "default" : "open"}
        onClick={() => {
          setOpen(Object.assign({}, open, { value: !open.value }))}}
      >
        {!open.value  ? 'Generate random number' : 'Hide random number' }
      </button>
      <br/>
      <Content open={open} />
    
    </>
  );
}

const MainPage: React.FC = () => {
  return (
    <div className="main-page-container">
      <DisplayPageLoadedSince />
      <ButtonToggle />
    </div>
  );
};

export default MainPage;
