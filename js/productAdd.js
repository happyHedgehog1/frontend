// 모달 메뉴 열기
document.getElementById("btn-submit-add").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "flex";
});

// 모달 닫기
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

// 옵션 누르면 메뉴 생겼다 없어졌다가는 기능
$(document).ready(function () {
    $('input[name="prd_op"]').change(function () {
        toggleOptionList();
    });

    // 옵션 목록 토글 함수
    function toggleOptionList() {
        if ($('input[name="prd_op"]:checked').val() === 'Y') {
            $('.op-list').show();
            $('.op-list_btn').show();
        } else {
            $('.op-list').hide();
            $('.op-list_btn').hide();
        }
    }
});

// 옵션 추가 삭제
$("body").on("click", "li.w140 a", function(event) {
    event.preventDefault(); // 링크의 기본 동작 방지
    if ($(this).find("img").attr("name") === "img-add") {
        // 새로운 op-list 엘리먼트 생성
        var newOpList = $("<tr class='op-list'>" +
                            "<th colspan='2'>" +
                                "<ul class='arr-align'>" +
                                    "<li class='w400'><input type='text' name='pre_deli' style='width: 350px;' value='예시 : 색상'></li>" +
                                    "<li class='w400'><input type='text' name='pre_deli' style='width: 350px;' value='예시 : 갈색'></li>" +
                                    "<li class='w200'><input type='number' name='pre_deli' style='width: 125px;' value='0'> 원</li>" +
                                    "<li class='w200'><input type='number' name='pre_deli' style='width: 125px;' value='0'> 개</li>" +
                                    "<li class='w140' style='padding-top: 5px;'><a href='#'><img src='/image/delete.png' height='25px' name='img-delete'></a></li>" +
                                "</ul>" +
                            "</th>" +
                        "</tr>");

        $(".op-list:last").after(newOpList);
    } else if ($(this).find("img").attr("name") === "img-delete") {
        $(this).closest(".op-list").remove();
    }
});

//상품 등록 재고 무제한 선택시 수량입력 제한
    $('input[name="prd_stock"]').change(function() {
    if($('input[name=prd_stock]:checked').val() === 'N'){
        $("#prd_stock_num").prop("disabled", true);
    }else{
        $("#prd_stock_num").prop("disabled", false);

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
