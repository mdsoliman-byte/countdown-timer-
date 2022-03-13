  const newYears = "4 Apr 2022";
function countDown() {
  const newYearsDate = new Date(newYears);
  const courentDate = new Date();
  const totalSecound = (newYearsDate - courentDate) / 1000;
  const days = Math.floor(totalSecound / 3600 / 24);
  getUiDAta("dayes", days);
  const howesr = Math.floor((totalSecound / 3600) % 24);
  getUiDAta("hoowurs", howesr);
  const min = Math.floor((totalSecound / 60) % 60);
  getUiDAta("munites", min);

  const sec = Math.floor(totalSecound % 60);
  getUiDAta("secound", sec);
  console.log(days, howesr, min, sec);
}
function getUiDAta(userInput, val) {
  const uiId = document.getElementById(userInput);
  uiId.innerText = val;
  return uiId;
}
countDown();

setInterval(countDown, 1000);
