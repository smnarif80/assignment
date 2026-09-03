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

console.log(describeValue("Shakil"));
console.log(describeValue(1));
console.log(describeValue("0"));
console.log(describeValue(true));


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

console.log(validateUsername("rahim123"));    
console.log(validateUsername("ab"));           
console.log(validateUsername("a b"));          
console.log(validateUsername("abcd"));        
console.log(validateUsername("rahim islam"));  
console.log(validateUsername("superadmin99")); 
console.log(validateUsername("Admin_Rahim"));


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

console.log( getCngFare(2));	
console.log(getCngFare(1));	
console.log(getCngFare(5));	
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));	
console.log(getCngFare(5, true))	;
console.log(getCngFare(5, true, 10));


// Answer to the question no-02

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

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));