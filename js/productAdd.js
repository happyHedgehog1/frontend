// 모달 메뉴 열기
document.getElementById("btnSubmitAdd").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "flex";
});

// 모달 닫기
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

// 옵션 누르면 메뉴 생겼다 없어졌다가는 기능
$(document).ready(function () {
    $('input[name="option"]').change(function () {
        toggleOptionList();
    });

    // 옵션 목록 토글 함수
    function toggleOptionList() {
        if ($('input[name="option"]:checked').val() === 'Y') {
            $('.optionList').show();
        } else {
            $('.optionList').hide();
        }
    }
});

// 옵션 추가 삭제
$("body").on("click", "li.w140 a", function(event) {
    event.preventDefault(); // 링크의 기본 동작 방지
    if ($(this).find("img").attr("name") === "img-add") {
        // 새로운 op-list 엘리먼트 생성
        var newOpList = $("<tr class='optionList'>" +
                            "<th colspan='2'>" +
                                "<ul class='arrAlign'>" +
                                    "<li class='w400'><input type='text' name='optionName' style='width: 350px;' value='예시 : 색상'></li>" +
                                    "<li class='w400'><input type='text' name='optionColor' style='width: 350px;' value='예시 : 갈색'></li>" +
                                    "<li class='w200'><input type='number' name='optionPrice' style='width: 125px;' value='0'> 원</li>" +
                                    "<li class='w200'><input type='number' name='optionQuantity' style='width: 125px;' value='0'> 개</li>" +
                                    "<li class='w140' style='padding-top: 5px;'><a href='#'><img src='/image/delete.png' height='25px' name='img-delete'></a></li>" +
                                "</ul>" +
                            "</th>" +
                        "</tr>");

        $(".optionList:last").after(newOpList);
    } else if ($(this).find("img").attr("name") === "img-delete") {
        $(this).closest(".optionList").remove();
    }
});

//상품 등록 재고 무제한 선택시 수량입력 제한
    $('input[name="quantityLimit"]').change(function() {
    if($('input[name=quantityLimit]:checked').val() === 'N'){
        $("#quantityLimitNumber").prop("disabled", true);
    }else{
        $("#quantityLimitNumber").prop("disabled", false);

    }
});

$("#file").on("change", function(e){
	
    var files = e.target.files; //input file 객체를 가져온다.
    var i,f;
    for (i = 0; i != files.length; ++i) {
        f = files[i];
        var reader = new FileReader(); //FileReader를 생성한다.         
        
        //성공적으로 읽기 동작이 완료된 경우 실행되는 이벤트 핸들러를 설정한다.
        reader.onload = function(e) {
        };
        reader.readAsBinaryString(f);
    }
});

$('#summernote').summernote({
    placeholder: '내용을 입력해주세요',
    tabsize: 2,
    height: 120,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ]
  });