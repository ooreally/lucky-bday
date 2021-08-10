var dob = document.querySelector("#dateOfBirth");
var luckyNo = document.querySelector("#luckyNumber");
var checkBtn = document.querySelector("#check_btn");
var outDiv = document.querySelector(".output_area");
var outText = document.querySelector("#output_text");
var outImg = document.querySelector("#output_image");
var errDiv = document.querySelector("#error");
var noticeDiv = document.querySelector(".notice");
var cancelNotice = document.querySelector("#cancel");
var showNotice = document.querySelector("#show_notice");
// console.log(dob.value);
const calculateDobSum = (str) => {
  var sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "-") sum += parseInt(str[i]);
    // console.log(sum);
  }
  return sum;
};

const happyImage = '<img id="reaction" src="images/happy.svg" alt="sad">';
const sadImage = '<img id="reaction"src="images/sad.svg" alt="sad">';
const msg =
  "Oops! Your birthday is not lucky." +
  "<br><small>" +
  " P.S.- Change your lucky number" +
  "</small>";

const btnClickHandler = () => {
  errDiv.style.display = "none";
  outDiv.style.display = "none";
  var birthDate = dob.value;
  var luck = Number(luckyNo.value);
  // console.log( typeof luck);
  if (birthDate)
    if (luck > 0) {
      if (!Number.isInteger(luck)) {
        showErrorMessage("Your lucky number can't be a fraction!");
      } else {
        var dateob = calculateDobSum(birthDate);
        // console.log(dateob);
        outDiv.style.display = "flex";
        if (dateob % luck === 0) {
          outText.innerText = "Wohoo!! Congrats. You are lucky.";
          outImg.innerHTML = happyImage;
        } else {
          outText.innerHTML = msg;
          outImg.innerHTML = sadImage;
        }
      }
    } else {
      showErrorMessage("Please enter a valid lucky number ");
    }
  else {
    showErrorMessage("Please enter date.");
  }
};

checkBtn.addEventListener("click", btnClickHandler);

cancelNotice.addEventListener("click", () => {
  noticeDiv.style.display = "none";
});

showNotice.addEventListener("click", () => {
    noticeDiv.style.display = "flex";
  });
const showErrorMessage = (message) => {
  errDiv.style.display = " flex";
  errDiv.innerText = message;
};
