// Answer to the question no-01

function describeValue(value) {
    let checkValue;

    if (typeof value === "string") {
        checkValue = "truthy";
    } else {
        checkValue = "falsy";
    }

    return `${typeof value} | ${checkValue }`;
}




// Answer to the question no-02

let day = "Saturday";
function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {
        case "friday":
            return "Weekend";

        case "saturday":
            return "Weekend";

        case "sunday":
            return "Working Day";

        case "monday":
            return "Working Day";

        case "tuesday":
            return "Working Day";

        case "wednesday":
            return "Working Day";

        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

console.log(getDayType("FRIDAY"));


// Answer to the question no-03

function validateUsername(username){
    return username.length < 4 
    ? "Too Short"
    : username.includes(" ")
    ? "No Space Allowed"
    : username.toLowerCase().includes("admin")
    ? "Reserved Word" : "Available" ;
}




// Answer to the question no-04

function getCngFare(distance, isNight , waitingMinutes) {

  let fare = 50;

  
  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  if(waitingMinutes){
    fare += waitingMinutes * 2;
  }
  
  
  if (isNight) {
    fare *= 1.20;
  }

  return fare;
}




// Answer to the question no-05

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

