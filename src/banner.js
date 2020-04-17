import React from "react";

const Banner = () => {
  const whatTime = new Date();
  const hour = whatTime.getHours();
  let dayTime = false;
  if (hour <= 6 && hour >= 21) {
    dayTime = false;
  } else {
    dayTime = true;
  }
  return (
    <div className="banner">
      <svg
        className={dayTime ? "day-time-svg" : "night-time-svg"}
        viewBox="0 0 500 250"
        preserveAspectRatio="none"
      >
        <circle
          className={dayTime ? "day-time" : "night-time-sun"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="22"
          cy="22"
          r="20"
        />
        <foreignObject id="fObject" x="20" y="50" width="230" height="90">
          <div className="inside-svg-div">
            <p className="title">Kelly Park Medical Clinic</p>
            <p className="titleDr">Dr. Peter Linh Nguyen</p>
            <button className="more-button">Call us : (408) 798-2088</button>
          </div>
        </foreignObject>
        <path
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          d="M9 7 Q -3 20 7 34 Q 22 48 39 33 Q 28 40 15 29 Q 7 20 9 7"
          fill="HSL(45, 63%, 85%)"
          strokeWidth="0.01em"
          stroke="HSL(45, 63%, 85%)"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="22"
          cy="22"
          r="1"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="42"
          cy="22"
          r="0.6"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="32"
          cy="30"
          r="0.2"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="300"
          cy="30"
          r="0.5"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="320"
          cy="19"
          r="0.5"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="288"
          cy="19"
          r="0.5"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="340"
          cy="10"
          r="0.5"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="200"
          cy="10"
          r="0.5"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="230"
          cy="16"
          r="0.5"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="180"
          cy="16"
          r="0.5"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="130"
          cy="6"
          r="0.5"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="145"
          cy="16"
          r="0.5"
        />
        <circle
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="sun"
          stroke="HSL(45, 63%, 85%)"
          cx="90"
          cy="3"
          r="0.5"
        />
        <path
          className={dayTime ? "day-time-stars" : "night-time-stars"}
          id="star"
          d="M 32 8 L 28 20 L 39 12 H 25 L 37 20Z"
          fill="HSL(45, 63%, 85%)"
          strokeWidth="0.01em"
          stroke="HSL(45, 63%, 85%)"
        />

        <path
          id="cloud1"
          className={dayTime ? "day-cloud" : "night-cloud"}
          d="M50 28 Q43 31 47 20 Q 49.5 15 54 18 Q 56 13.5 59 15 Q 61 7 65.5 8.8 Q 80 3.5 78 13 Q 83 11 84 13 Q 91 4 95 12 Q 105 11 97 19.5 Q 112 18 104 24 Q 109 23 107 27 Q 101 31 92 27 Q 85 32 72 28 Q 68 32 60 28 Q 55 32 50 28"
        />
        <path
          id="cloud2"
          className={dayTime ? "day-cloud" : "night-cloud"}
          d="M168 32 Q 167 22 178 22 Q 183 22 185 27 Q 190 13 200 15 Q 210 15 210.5 27 Q 222 15 228 24 Q 230 28 227 29 Q  243  30 233 40 Q 221 43 218 38 Q 203 48  195 40 Q 184 50 177 37 Q 170 45  168 32"
        />
        <path
          id="cloud3"
          className={dayTime ? "day-cloud" : "night-cloud"}
          d="M353 20 Q 344 19 349 15 Q 350 12 356 12 Q 351 4 365 3 Q 370 5 370 7 Q 385 -3 388 6 Q 403 6 395 15 Q 380 28 370 23 Q363 28 363 24 Q 354 31  353 20"
        />
        <path
          id="buildingFront"
          d="M320 180 L320 120 L430 110 L430 188Z "
          fill="HSL(15, 16%, 75%)"
        />
        <path
          id="buildingRoof"
          d="M320 120 L335 95 L450 82 L430 110 "
          fill="HSL(15, 16%, 15%)"
        />
        <path
          id="buildingSide"
          d="M450 82 L475 105 L475 170 L430 188 L430 110Z"
          fill="HSL(15, 16%, 75%)"
        />
        <path
          id="buildingWindowOne"
          d="M330 160 L330 135 L360 133 L360 162Z"
          fill="HSL(15, 4%, 72%)"
        />
        <path
          id="buildingDoor"
          d="M380 184.5 L380 145 L410 145 L410 186.5 L395.5 185.5 L395.5 145 L395 145 L395 185.5Z"
          fill="HSL(15, 4%, 72%)"
        />
        <path
          id="buildingLeftHandle"
          d="M394.3 165 L394.3 167"
          fill="transparent"
          stroke="red"
        />
        <path
          id="buildingRightHandle"
          d="M396.1 165 L396.1 167"
          fill="transparent"
        />
        <circle id="circleSign" cx="452" cy="135" r="20" fill="transparent" />
        <path
          id="buildingSign"
          d="M447 118 L 457 118 L 457 130 L469 130 L 469 139.5 L457 139.5 L457 152 L447 152 L447 139.5 L435 139.5 L435 130 L447 130Z"
          fill="HSL(12, 86%, 43%)"
          stroke="red"
        />
        <path
          id="BuildingBehind"
          d="M400 88 L420 60 L500 55 L 500 82 L452 84 L449.9 82.2Z"
          fill="HSL(15, 16%, 15%)"
        />
        <path
          id="BuildingBehindFront"
          d="M452 84 L475 105 L475 160 L500 162 L500 82Z"
          fill="HSL(15, 16%, 75%)"
        />
        <path
          id="BuildingBehindWindow"
          d="M500 109 L480 110 L480 135 L500 136Z"
          fill="HSL(15, 4%, 72%)"
        />
        <path
          id="BuildingStairsRight"
          d="M500 200 L475 215 L500 235Z"
          fill="HSL(15, 4%, 92%)"
        />
        <path
          id="BuildingStairsLeft"
          d="M480 250 L440 230 L300 210 L150 250Z"
          fill="HSL(15, 4%, 92%)"
        />
        <path
          id="BuildingLeftTree"
          d="M320 180 L250 160 L320 150Z"
          fill="HSL(15, 4%, 92%)"
        />
        <path
          id="BuildingParking"
          d="M0 160 L200 170 L240 190 L0 250Z"
          fill="HSL(15, 4%, 92%)"
        />
        <path
          id="BuildingLeftRoadYellowLine"
          d="M90 250 L255 200 L258 201 L95 250Z"
          fill="HSL(45, 74%, 58%)"
        />
        <path
          id="BuildingRightRoadYellowLine"
          d="M265 182 L228 168 L232 168 L268 182"
          fill="HSL(45, 74%, 58%)"
        />
        <path
          id="BuildingBehindTallRight"
          d="M450 0 L450 58 L500 55.5 L500 0Z"
          fill="HSL(15, 16%, 85%)"
        />
        <path
          id="BuildingBehindTallRightWindow"
          d="M455 5 L455 15 L465 15 L465 5Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallRightWindow2"
          d="M455 25 L455 35 L465 35 L465 25Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallRightWindow3"
          d="M455 45 L455 55 L465 55 L465 45Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallRightWindow4"
          d="M485 5 L485 15 L495 15 L495 5Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallRightWindow5"
          d="M485 25 L485 35 L495 35 L495 25Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallRightWindow6"
          d="M485 45 L485 55 L495 55 L495 45Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallMiddle"
          d="M410 74 L 410 35 L450 35 L450 58 L420 60Z"
          fill="HSL(15, 16%, 85%)"
        />
        <path
          id="BuildingBehindTallMiddleWindow1"
          d="M415 45 L415 55 L425 55 L425 45Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallMiddleWindow2"
          d="M435 45 L435 55 L445 55 L445 45Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallLeft"
          d="M430 35 L430 15 L370 15 L370 91 L400 87.8 L410 74 L410 35Z"
          fill="HSL(15, 16%, 85%)"
        />
        <path
          id="BuildingBehindTallLeftWindow1"
          d="M375 20 L375 30 L385 30 L385 20Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallLeftWindow2"
          d="M395 20 L395 30 L405 30 L405 20Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallLeftWindow3"
          d="M415 20 L415 30 L425 30 L425 20Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallLeftWindow4"
          d="M375 40 L375 50 L385 50 L385 40Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallLeftWindow5"
          d="M395 40 L395 50 L405 50 L405 40Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallLeftWindow6"
          d="M375 60 L375 70 L385 70 L385 60Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallLeftWindow7"
          d="M395 60 L395 70 L405 70 L405 60Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BuildingBehindTallLeftWindow8"
          d="M375 80 L375 90 L380 90 L385 89.5 L385 80Z"
          fill="HSL(15, 16%, 95%)"
          stroke="red"
        />
        <path
          id="BuildingBehindTallLeftWindow9"
          d="M395 80 L395 88.5 L400 88 L405 81 L405 80Z"
          fill="HSL(15, 16%, 95%)"
        />
        <path
          id="BigTreeLeaf"
          d="M300 118 Q 278 128 279 113 Q 264 112 270 103 Q 255 98 263 91 Q 257 76 267 76 Q 268 63 280 66 Q 288 55 299 63 Q 310 53 319 65 Q 335 63 330 75 Q 342 79 333 87 Q 339 94 329 97 Q 332 98 332.5 99.5 L326 109.6 Q 324 109.5 322 108 Q 325 120 309 119Z"
          fill="HSL(131, 58%, 40%)"
        />
        <path
          id="BigTree"
          d="M300 165 Q 302 140 300 120 L290 90 L302 110 L303 80 L305 110 L313 90 L309 120 Q310 120 312 165 L 320 169Z  "
          fill="HSL(15, 16%, 40%)"
        />
        <path
          id="StopSign1"
          d="M255 161 L255 145 H 256 V 161Z "
          fill="HSL(120, 1%, 81%)"
        />
        <path
          id="StopSign1Dash1"
          d="M255 145 L 252 142 V 138 L 255 135 H 256 L 259 138 V 142 L256 145Z"
          fill="HSL(9, 94%, 50%)"
        />
        <path
          id="StopSign2"
          d="M298 212 L298 195 H 299 V 212Z"
          fill="HSL(120, 1%, 81%)"
        />
        <path
          id="StopSign2Dash1"
          d="M298 195 L 295 192 V 189 L 298 186 H 299 L 302 189 V 192 L299 195Z"
          fill="HSL(9, 94%, 50%)"
        />
        <path
          id="StairRightHand"
          d="M440 230 L 441 222 L480 243 V 250"
          fill="transparent"
        />
        <path
          id="StairLeftHand"
          d="M475 215 L 475 207 L 499 226 L500 235"
          fill="transparent"
        />
        <path id="StairStep1" d="M440 230 L 475 215" fill="transparent" />
        <path id="StairStep2" d="M448 234 L 481 220" fill="transparent" />
        <path id="StairStep3" d="M456 238 L 487 225" fill="transparent" />
        <path id="StairStep4" d="M464 242 L 494 230" fill="transparent" />
        <path id="StairStep5" d="M472 246 L 500 235" fill="transparent" />
        <path id="StairStep5" d="M480 250 L 506 240" fill="transparent" />
      </svg>
    </div>
  );
};

export default Banner;
