let timeData;

const fetchTimeDaily = (dataCollection) => {
  dataCollection.forEach(data => {
    if (data.title == "Work"){
      workHrs.innerHTML = data.timeframes.daily.current + "hrs";
      workPrev.innerHTML = 'Yesterday  - ' + data.timeframes.daily.previous + "hrs";
    };
    if (data.title == "Play"){
      playHrs.innerHTML = data.timeframes.daily.current + "hrs";
      playPrev.innerHTML = 'Yesterday  - ' + data.timeframes.daily.previous + "hrs";
    };
    if (data.title == "Study"){
      studyHrs.innerHTML = data.timeframes.daily.current + "hrs";
      studyPrev.innerHTML = 'Yesterday  - ' + data.timeframes.daily.previous + "hrs";
    };
    if (data.title == "Exercise"){
      exerciseHrs.innerHTML = data.timeframes.daily.current + "hrs";
      exercisePrev.innerHTML = 'Yesterday  - ' + data.timeframes.daily.previous + "hrs";
    };
    if (data.title == "Social"){
      socialHrs.innerHTML = data.timeframes.daily.current + "hrs";
      socialPrev.innerHTML = 'Yesterday  - ' + data.timeframes.daily.previous + "hrs";
    };
    if (data.title == "Self Care"){
      selfCareHrs.innerHTML = data.timeframes.daily.current + "hrs";
      selfCarePrev.innerHTML = 'Yesterday - ' + data.timeframes.daily.previous + "hrs";
    };
  });
};

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    timeData = data; // Assign fetched data to timeData
    fetchTimeDaily(timeData); // Call your function with timeData after it's fetched
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
    // Handle errors here
  });



const workHrs = document.querySelector("#work .info .hours");
const playHrs = document.querySelector("#play .info .hours");
const studyHrs = document.querySelector("#study .info .hours");
const exerciseHrs = document.querySelector("#exercise .info .hours");
const socialHrs = document.querySelector("#social .info .hours");
const selfCareHrs = document.querySelector("#self-care .info .hours");

const workPrev = document.querySelector("#work .info .previous");
const playPrev = document.querySelector("#play .info .previous");
const studyPrev = document.querySelector("#study .info .previous");
const exercisePrev = document.querySelector("#exercise .info .previous");
const socialPrev = document.querySelector("#social .info .previous");
const selfCarePrev = document.querySelector("#self-care .info .previous");

let timeFrameSelected = "weekly";

const dailyButton = document.getElementById("daily-btn");
const weeklyButton = document.getElementById("weekly-btn");
const monthlyButton = document.getElementById("monthly-btn");

document.querySelectorAll(".ellipsis").forEach(function(ellipsis) {
  ellipsis.addEventListener("click", function() {
    // Find the settings div immediately following the clicked ellipsis
    const settingsDiv = this.nextElementSibling;
    if (settingsDiv && settingsDiv.classList.contains("settings")) {
      // Toggle the display property
      settingsDiv.style.display = settingsDiv.style.display === "flex" ? "none" : "flex";
    }
  });
});



const fetchTimeWeekly = (dataCollection) => {
  dataCollection.forEach(data => {
    if (data.title == "Work"){
      workHrs.innerHTML = data.timeframes.weekly.current + "hrs";
      workPrev.innerHTML = 'Yesterday  - ' + data.timeframes.weekly.previous + "hrs";
    };
    if (data.title == "Play"){
      playHrs.innerHTML = data.timeframes.weekly.current + "hrs";
      playPrev.innerHTML = 'Yesterday  - ' + data.timeframes.weekly.previous + "hrs";
    };
    if (data.title == "Study"){
      studyHrs.innerHTML = data.timeframes.weekly.current + "hrs";
      studyPrev.innerHTML = 'Yesterday  - ' + data.timeframes.weekly.previous + "hrs";
    };
    if (data.title == "Exercise"){
      exerciseHrs.innerHTML = data.timeframes.weekly.current + "hrs";
      exercisePrev.innerHTML = 'Yesterday  - ' + data.timeframes.weekly.previous + "hrs";
    };
    if (data.title == "Social"){
      socialHrs.innerHTML = data.timeframes.weekly.current + "hrs";
      socialPrev.innerHTML = 'Yesterday  - ' + data.timeframes.weekly.previous + "hrs";
    };
    if (data.title == "Self Care"){
      selfCareHrs.innerHTML = data.timeframes.weekly.current + "hrs";
      selfCarePrev.innerHTML = 'Yesterday - ' + data.timeframes.weekly.previous + "hrs";
    };
  });
};

const fetchTimeMonthly = (dataCollection) => {
  dataCollection.forEach(data => {
    if (data.title == "Work"){
      workHrs.innerHTML = data.timeframes.monthly.current + "hrs";
      workPrev.innerHTML = 'Yesterday  - ' + data.timeframes.monthly.previous + "hrs";
    };
    if (data.title == "Play"){
      playHrs.innerHTML = data.timeframes.monthly.current + "hrs";
      playPrev.innerHTML = 'Yesterday  - ' + data.timeframes.monthly.previous + "hrs";
    };
    if (data.title == "Study"){
      studyHrs.innerHTML = data.timeframes.monthly.current + "hrs";
      studyPrev.innerHTML = 'Yesterday  - ' + data.timeframes.monthly.previous + "hrs";
    };
    if (data.title == "Exercise"){
      exerciseHrs.innerHTML = data.timeframes.monthly.current + "hrs";
      exercisePrev.innerHTML = 'Yesterday  - ' + data.timeframes.monthly.previous + "hrs";
    };
    if (data.title == "Social"){
      socialHrs.innerHTML = data.timeframes.monthly.current + "hrs";
      socialPrev.innerHTML = 'Yesterday  - ' + data.timeframes.monthly.previous + "hrs";
    };
    if (data.title == "Self Care"){
      selfCareHrs.innerHTML = data.timeframes.monthly.current + "hrs";
      selfCarePrev.innerHTML = 'Yesterday - ' + data.timeframes.monthly.previous + "hrs";
    };
  });
};



dailyButton.addEventListener("click",  function() {
    timeFrameSelected="daily";
    fetchTimeDaily(timeData);
});

weeklyButton.addEventListener("click",  function() {
    timeFrameSelected="weekly";
    fetchTimeWeekly(timeData);
});

monthlyButton.addEventListener("click", function() {
    timeFrameSelected="monthly";
    fetchTimeMonthly(timeData);
});






