import { useLoaderData, useNavigate } from "react-router-dom";
import Rectangle from "./Rectangle.png";
import Logout from "../Logout";
import { HiHome } from "react-icons/hi";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import "./UserProfile.css";

const UserProfile = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const greeting = () => {
    const date = new Date();
    const hours = date.getHours();
    var greet;
    if (hours < 12) {
      greet = "Morning";
    } else if (hours >= 12 && hours <= 17) {
      greet = "Afternoon";
    } else if (hours >= 17 && hours <= 24) {
      greet = "Evening";
    }
    return <span>Good {greet}</span>;
  };

  return (
    <div className="userProfile_container">
      {data?.topics?.map((user) => (
        <div key={user.id}>
          <div className="userProfile_user">
            <img className="image" src={user.avatar} alt="Avatar" />
            <div className="greeting">
              {greeting()}
              <span>{user.name}!</span>
            </div>
          </div>
          <div className="userProfile_streak">
            <svg
              width="26"
              height="35"
              viewBox="0 0 26 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Exclude"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.8131 20.5684C27.0214 26.9073 22.2456 32.9205 15.1461 33.9993C8.0466 35.0782 1.3118 30.8141 0.103501 24.4753C-1.1048 18.1364 8.66521 0 8.66521 0C8.66521 0 12.6674 3.57285 16.8129 7.93547C19.1761 5.975 21.0156 4.60069 21.0156 4.60069C21.0156 4.60069 24.9975 14.0532 25.676 20.0126C25.733 20.2039 25.7789 20.3893 25.8131 20.5684ZM13.1359 27.8734C16.1253 27.8734 18.5486 25.7097 18.5486 23.0407C18.5486 20.3716 16.1253 18.2079 13.1359 18.2079C10.1466 18.2079 7.72327 20.3716 7.72327 23.0407C7.72327 25.7097 10.1466 27.8734 13.1359 27.8734Z"
                fill="#E7A23A"
              />
            </svg>
            <h3> 3 days of practice</h3>
          </div>
          <div className="userProfile_fullLession">
            <div
              className="rectangle_background_image"
              style={{ backgroundImage: `url(${Rectangle})` }}
            >
              <div className="reatangle_contents">
                <h3>The essentials</h3>
                <div>
                  {/* <svg className="progress" width="53" height="7" viewBox="0 0 53 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect id="Rectangle 38" width="52.0635" height="7" rx="3.5" fill="#E7A23A"/>
                   </svg> */}
                  <span className="progress">
                    <svg
                      width="300"
                      height="14"
                      viewBox="0 0 235 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        id="Rectangle 37"
                        x="0.714355"
                        width="234.286"
                        height="7"
                        rx="3.5"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  onClick={navigate("/chatPage")}
                  className="userProfile_checkIn"
                >
                  <div className="check-in">
                    <p>Continue with:</p>
                    <h4>{user.name}</h4>
                  </div>
                  <svg
                    className="dot"
                    width="12"
                    height="22"
                    viewBox="0 0 12 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector 987"
                      d="M2 2L10 11L2 20"
                      stroke="#11273E"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="dots">
                  <svg
                    className="dot"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      id="Ellipse 71"
                      cx="4.5"
                      cy="4.5"
                      r="4.5"
                      fill="#11273E"
                    />
                  </svg>
                  <svg
                    className="dot"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      id="Ellipse 71"
                      cx="4.5"
                      cy="4.5"
                      r="4.5"
                      fill="#ffffff"
                    />
                  </svg>
                  <svg
                    className="dot"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      id="Ellipse 71"
                      cx="4.5"
                      cy="4.5"
                      r="4.5"
                      fill="#ffffff"
                    />
                  </svg>
                  <svg
                    className="dot"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      id="Ellipse 71"
                      cx="4.5"
                      cy="4.5"
                      r="4.5"
                      fill="#ffffff"
                    />
                  </svg>
                  <svg
                    className="dot"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      id="Ellipse 71"
                      cx="4.5"
                      cy="4.5"
                      r="4.5"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="userProfile_streak daily-challenge">
        <h3>Daily Challenge</h3>
        <span>
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Icon"
              d="M3.60005 7.7999V6.88562C3.60005 3.84671 6.00862 1.3999 9.00005 1.3999C11.9915 1.3999 14.4001 3.84671 14.4001 6.88562V7.7999M3.60005 7.7999C2.61005 7.7999 1.80005 8.62276 1.80005 9.62847V18.7713C1.80005 19.777 2.61005 20.5999 3.60005 20.5999H14.4001C15.3901 20.5999 16.2001 19.777 16.2001 18.7713V9.62847C16.2001 8.62276 15.3901 7.7999 14.4001 7.7999M3.60005 7.7999H14.4001M9.00005 15.1999V12.7999"
              stroke="white"
              stroke-opacity="0.8"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </div>

      <div className="menu">
        <HiHome />
        <MdOutlineMenuBook />
        <FaUserAlt />
      </div>
      <Logout />
    </div>
  );
};

export default UserProfile;
