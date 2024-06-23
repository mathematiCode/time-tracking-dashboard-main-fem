const workHrs = document.querySelector("#work .info .hours");
const playHrs = document.querySelector("#play .info .hours");
const studyHrs = document.querySelector("#study .info .hours");
const exerciseHrs = document.querySelector("#exercise .info .hours");
const socialHrs = document.querySelector("#social .info .hours");
const selfCareHrs = document.querySelector("#self-care .info .hours");

let timeFrameSelected = "weekly";

const dailyButton = document.getElementById("daily-btn");
const weeklyButton = document.getElementById("weekly-btn");
const monthlyButton = document.getElementById("monthly-btn");



dailyButton.addEventListener("click",  function() {
    timeFrameSelected="daily";
});

weeklyButton.addEventListener("click",  function() {
    timeFrameSelected="weekly";
    console.log("Displaying Weekly");
});

monthlyButton.addEventListener("click", function() {
    timeFrameSelected="monthly";
});

let timeData; 

fetch("./data.json")
.then(res => res.json())
.then(data => timeData = data);



const fetchTimeDaily = (dataCollection) => {
    dataCollection.forEach(data => {
      if (data.title == "Work"){
        workHrs.innerHTML = data.timeframes.daily.current + "hrs";
        workPrev.innerHTML = 'Last Day - ' + data.timeframes.daily.previous + "hrs";
      };
    });
};

fetchTimeDaily(timeData);