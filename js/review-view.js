function showReviewContent(element) {
    const reviewContent = document.getElementById("reviewContent");
    reviewContent.innerHTML = element.innerHTML;

    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    // document.body.style.overflow = "hidden"; // 스크롤 막기
}

function hideReviewContent() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    // document.body.style.overflow = "auto"; // 스크롤 허용
}