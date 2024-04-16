import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import { curlybtn } from "../constants"
import Scripts from "./Scripts";
  
const EditorBtn = ({ className, href, onClick, children, px, white, linkTo, list }) => {
  <Scripts />
  const spanClasses = "";
  const renderButton = () => (
    <div className="editorbtn editor-dropdown curly-main-btn">
  <input className="editor-dropdown-value" type="hidden" />
  <div className="editor-dropdown-input">
  {children}
    <icon-quix icon="chevron-down"></icon-quix>
  </div>
  <div className="editor-dropdown-panel">
    <ul>
      
      {list.map((item) => (
              <li
                key={item.id}
              >
                {item.text}
              </li>
            ))}
    </ul>
  </div>
</div>
  );

  const renderLink = () => (
    <a href={href}>
      <button className="editor-button">
        <span className={spanClasses}>{children}</span>
      </button>
    </a>
  );
  
  return href ? renderLink() : renderButton();
};

export default EditorBtn;