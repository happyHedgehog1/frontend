const phoneAuthenticationButton = document.getElementById(
    "phoneAuthenticationButton"
);

/* 휴대폰 인증이 버튼을 누르면 나오는 부분 시작 */
const authenticationCodeLabel = document.querySelector(
    "label[for=authenticationCode]"
);
const authenticationCodeInput = document.querySelector(
    "input#authenticationCode"
);
const authenticationCodeButton = document.querySelector(
    "input#authenticationCodeButton"
);
const authenticationTimer = document.querySelector("span#authenticationTimer");
const authenticationTimerButton = document.querySelector(
    "img#authenticationTimerButton"
);
/* 휴대폰 인증 버튼을 누르면 나오는 부분 끝 */
/* 인증하기 버튼을 누르면 나오는 부분 시작 */
const authenticationSuccess = document.querySelector(
    "span#authenticationSuccess"
);
/* 인증하기 버튼을 누르면 나오는 부분 끝 */

phoneAuthenticationButton.addEventListener("click", () => {
    // console.dir(window.getComputedStyle(authenticationSuccess)); // 외부 css를 읽어 올 경우.
    if (window.getComputedStyle(authenticationSuccess).display === "none") {
        const username = document.getElementById("username").value;
        const phone = document.getElementById("phone").value;
        const success = true; // 수정예정. 데이터베이스에 있는 이름+휴대폰 번호와 일치하는가.

        if (success) {
            // 이 부분은 이름과 휴대폰 번호가 같은지 확인 되었을 경우
            console.log(username, phone, "이름과 휴대전화가 일치합니다.");
            authenticationCodeLabel.style.display = "block";
            authenticationCodeInput.style.display = "block";
            authenticationCodeButton.style.display = "block";
            authenticationTimer.style.display = "block";
            authenticationTimerButton.style.display = "block";

            authenticationCodeButtonClick();
            authenticationTimerStart(authenticationTimer);
        } else {
            // 이 부분은 불일치한 경우
            console.log("이름과 휴대전화가 일치하지 않습니다.");
        }
    }
});
let timerInterval;
function authenticationCodeButtonClick() {
    authenticationCodeButton.addEventListener("click", function () {
        const authenticationCode = authenticationCodeInput.value;
        const success = true; // 수정예정. 문자로 보낸 코드가 일치하면.
        if (success) {
            // 이 부분은 인증 번호가 완료됐을 경우
            console.log(authenticationCode, "인증번호가 일치합니다.");
            authenticationSuccess.style.display = "block";

            authenticationCodeLabel.style.display = "none";
            authenticationCodeInput.style.display = "none";
            authenticationCodeButton.style.display = "none";
            authenticationTimer.style.display = "none";
            authenticationTimerButton.style.display = "none";
            clearInterval(timerInterval);
        } else {
            // 이 부분은 인증 번호가 실패했을 경우
            console.log("인증번호가 일치하지 않습니다.");
        }
    });
}
function authenticationTimerStart(element) {
    let timerValue = 299; // 5분
    timerInterval = setInterval(() => {
        printTimer(timerValue, element);
        if (timerValue === -1) {
            clearInterval(timerInterval);
            alert("시간이 초과되었습니다! 다시 로그인 페이지로 돌아갑니다.");
            location = location;
        } else {
            timerValue--;
        }
    }, 1000);
    console.log(authenticationTimerButton);
    authenticationTimerButton.addEventListener("click", () => {
        timerValue = 300;
        printTimer(timerValue, element);
    });
}
function printTimer(time, element) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    element.innerText = `${(minutes < 10 ? "0" : "") + minutes}:${
        (seconds < 10 ? "0" : "") + seconds
    }`;
}
