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
      <TETabs className="justify-center">
        <Link to='/dashboard'>
            <TETabsItem
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
            >
            Dashboard
            </TETabsItem>
        </Link>
        <Link to='/login'>
            <TETabsItem
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
            >
            Login Page
            </TETabsItem>
        </Link>
      </TETabs>
    </div>
    </>
  )
}

export default NavBar
