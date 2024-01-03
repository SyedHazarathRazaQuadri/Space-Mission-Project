import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  TETabs,
  TETabsItem,
} from "tw-elements-react";

function NavBar() {
    const [basicActive, setBasicActive] = useState("tab1");

    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
      setBasicActive(value);
    };
  return (
    <>
    <div className="mb-3">
      <TETabs style={{background:'azure'}} className="justify-between" >
        <Link to='/dashboard' style={{background:'#c6d3de'}}>
            <TETabsItem
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
            >
            Dashboard
            </TETabsItem>
        </Link>
        <Link to='/login' style={{background:'#c6d3de'}}>
            <TETabsItem
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
            >
            Log Out
            </TETabsItem>
        </Link>
      </TETabs>
    </div>
    </>
  )
}

export default NavBar
