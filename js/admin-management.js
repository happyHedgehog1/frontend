function updateCurrentTime() {
    var currentTimeElement = document.getElementById("current-time");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // 시, 분, 초가 한 자리 숫자일 경우 앞에 0을 추가
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // 시간을 HTML 요소에 업데이트
    currentTimeElement.textContent = hours + ":" + minutes + ":" + seconds;
}

// 페이지 로드 시 초기 업데이트
updateCurrentTime();




// 관리자 등록 모달 메뉴 열기
document.getElementById("btn-admi-add").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "flex";
});

// 관리자 등록 모달 닫기
document.getElementById("close-admin-Modal").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

// 비밀번호 변경 모달 메뉴 열기
document.getElementById("btn-chang-pass").addEventListener("click", function() {
    document.getElementById("pass-change").style.display = "flex";
});

// 비밀번호 변경 모달 닫기
document.getElementById("close-pass-Modal").addEventListener("click", function() {
    document.getElementById("pass-change").style.display = "none";
});