import React, { useState } from "react";
import "./MenuBar.css";

const MenuBar = () => {
  // eslint-disable-next-line
  const [ShowDropDown, setShowDropDown] = useState(false);

  const facebookHander = () => {
    window.open("https://www.facebook.com/the.okyo.store/");
  };
  const instagramHandler = () => {
    window.open("https://www.instagram.com/theokyo.store/");
  };

  return (
    <div className="MenuBar">
      <div className="MenuBar--logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58.18"
          height="58.18"
          viewBox="0 0 58.18 58.18"
        >
          <g
            id="Group_1"
            data-name="Group 1"
            transform="translate(-279.1 -28.04)"
          >
            <rect
              id="Rectangle_5"
              data-name="Rectangle 5"
              width="51.22"
              height="51.22"
              transform="translate(282.58 31.52)"
              fill="#f7f6f4"
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M313.71,57.25h-4.7V33.96h4.67v2.99h8.5v4.74h-8.02a25.666,25.666,0,0,0,6.01,7.76,28.034,28.034,0,0,0,8.41,5.03c-.64,1.45-1.26,2.85-1.9,4.32a31.477,31.477,0,0,1-12.97-9.19C313.71,52.27,313.71,54.72,313.71,57.25Z"
            />
            <path
              id="Path_7"
              data-name="Path 7"
              d="M306.08,48.17A9.145,9.145,0,1,1,296.94,39,9.152,9.152,0,0,1,306.08,48.17Z"
              fill="#cc3313"
            />
            <path
              id="Path_8"
              data-name="Path 8"
              d="M292.3,80.3c-.67-1.37-1.32-2.67-1.99-4.04a18.807,18.807,0,0,0,8.57-8.78,8.136,8.136,0,0,1-7.79-2.67,7.277,7.277,0,0,1-1.87-5.12h4.35c.78,2.47,1.87,3.45,3.64,3.41s2.87-1.1,3.5-3.41h4.41a22.072,22.072,0,0,1-2.64,10.66A22.839,22.839,0,0,1,292.3,80.3Z"
            />
            <path
              id="Path_9"
              data-name="Path 9"
              d="M307.72,68.8a9.135,9.135,0,1,1,9.09,9.2A9.14,9.14,0,0,1,307.72,68.8Zm14.05.05a4.92,4.92,0,1,0-4.95,4.94A4.925,4.925,0,0,0,321.77,68.85Z"
            />
            <path
              id="Path_10"
              data-name="Path 10"
              d="M333.79,31.52V82.74H282.57V31.52h51.22m3.49-3.48H279.1V86.22h58.18V28.04Z"
              fill="#cc3313"
            />
          </g>
        </svg>
      </div>

      <div className="MenuBar-NavBar">
        <p className="Menubar--NavItems noselect">
          TRANG CHỦ
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p className="Menubar--NavItems">
          VỀ CHÚNG TÔI
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p
          className="Menubar--Shop"
          onMouseEnter={() => setShowDropDown(true)}
          onMouseLeave={() => setShowDropDown(false)}
        >
          SẢN PHẨM
          <div className="MenuBar--DownArrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6.05"
              height="3.77"
              viewBox="0 0 6.05 3.77"
            >
              <path
                id="Path_49"
                data-name="Path 49"
                d="M940.56,142.43l.75.74-3.03,3.03-3.02-3.03.75-.74,2.27,2.28Z"
                transform="translate(-935.26 -142.43)"
                fill="#f7f6f4"
              />
            </svg>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p className="Menubar--NavItems">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LIÊN HỆ
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      </div>

      <div className="MenuBar--SocialMedia">
        <div className="MenuBar--icons" onClick={facebookHander}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7.498"
            height="14"
            viewBox="0 0 7.498 14"
          >
            <path
              id="Icon_awesome-facebook-f"
              data-name="Icon awesome-facebook-f"
              d="M8.616,7.875l.389-2.534H6.574V3.7A1.267,1.267,0,0,1,8,2.328H9.108V.171A13.478,13.478,0,0,0,7.146,0,3.093,3.093,0,0,0,3.835,3.41V5.341H1.609V7.875H3.835V14H6.574V7.875Z"
              transform="translate(-1.609)"
              fill="#fff"
            />
          </svg>
        </div>

        <div className="MenuBar--icons" onClick={instagramHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.003"
            height="14"
            viewBox="0 0 14.003 14"
          >
            <path
              id="Icon_awesome-instagram"
              data-name="Icon awesome-instagram"
              d="M7,5.648a3.589,3.589,0,1,0,3.589,3.589A3.584,3.584,0,0,0,7,5.648Zm0,5.923A2.334,2.334,0,1,1,9.331,9.238,2.338,2.338,0,0,1,7,11.571ZM11.571,5.5a.837.837,0,1,1-.837-.837A.835.835,0,0,1,11.571,5.5Zm2.377.85a4.143,4.143,0,0,0-1.131-2.933A4.17,4.17,0,0,0,9.884,2.287c-1.156-.066-4.62-.066-5.776,0A4.164,4.164,0,0,0,1.175,3.415,4.157,4.157,0,0,0,.044,6.348c-.066,1.156-.066,4.62,0,5.776a4.143,4.143,0,0,0,1.131,2.933,4.176,4.176,0,0,0,2.933,1.131c1.156.066,4.62.066,5.776,0a4.143,4.143,0,0,0,2.933-1.131,4.17,4.17,0,0,0,1.131-2.933c.066-1.156.066-4.617,0-5.773Zm-1.493,7.013A2.363,2.363,0,0,1,11.125,14.7,15.429,15.429,0,0,1,7,14.976,15.549,15.549,0,0,1,2.871,14.7,2.363,2.363,0,0,1,1.54,13.364a15.429,15.429,0,0,1-.281-4.127A15.549,15.549,0,0,1,1.54,5.111,2.363,2.363,0,0,1,2.871,3.78,15.429,15.429,0,0,1,7,3.5a15.549,15.549,0,0,1,4.127.281,2.363,2.363,0,0,1,1.331,1.331,15.429,15.429,0,0,1,.281,4.127A15.42,15.42,0,0,1,12.455,13.364Z"
              transform="translate(0.005 -2.238)"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
