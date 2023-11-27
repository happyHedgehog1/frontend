 
// 카테고리 대분류 추가
$("body").on("click", "#btnCategoryAdd", function(event) {
    event.preventDefault(); // 링크의 기본 동작 방지
    console.log(`버튼 클릭`)
    // 새로운 엘리먼트 생성
    var newCategory = $(
        "<table style='width: 550px;' class='category-row'>" +
        "<colgroup>" +
        "<col style='width: 85%;'>" +
        "<col style='width: 5%;'>" +
        "<col style='width: 5%;'>" +
        "<col style='width: 5%;'></colgroup>" +
        "<tr class='category'>" +
<<<<<<< HEAD:admin/js/categoryAdd.js
        "<td><img src='../../image/category1.png' height='20px'> 카테고리(대분류)</td>" +
        "<td><a href='#'><img src='../../image/add2.png' height='13px' name='img-add2' style='padding-left: 5px;'></a></td>" +
        "<td><a href='#'><img src='../../image/open.png' height='12px' name='img-open' id='img-open'></a></td>" +
        "<td><a href='#'><img src='../../image/allow_down.png' height='10px' name='img-allow_down'></a></td>" +
=======
        "<td><img src='/temp/image/category1.png' height='20px'> 카테고리(대분류)</td>" +
        "<td><a href='#'><img src='/temp/image/add2.png' height='13px' name='img-add2' style='padding-left: 5px;'></a></td>" +
        "<td><a href='#'><img src='/temp/image/open.png' height='12px' name='img-open' id='img-open'></a></td>" +
        "<td><a href='#'><img src='/temp/image/allow_down.png' height='10px' name='img-allow_down'></a></td>" +
>>>>>>> 409df9f7bf3ecd56ce3a92b46041213b1f1ae02b:temp/js/categoryAdd.js
        "</tr>"
    );

    $(".category-row:last").after(newCategory);
});


// 카테고리 소분류 추가
    $("body").on("click", 'img[name="img-add2"]', function() {
    console.log(`버튼 클릭`)
    // 새로운 엘리먼트 생성
    var currentRow = $(this).closest('tr');
    var newsemiCategory = $(
        "<tr class='category1'>"+
<<<<<<< HEAD:admin/js/categoryAdd.js
        "<td style='padding-left: 5px;'><img src='../../image/L.png' height='20px'><img src='../../image/category2.png' height='20px'> 카테고리(소분류)</td>"+
        "<td></td>"+
        "<td></td>"+
        "<td><a href='#'><img src='../../image/open.png' height='12px' name='open'></a></td>"+
=======
        "<td style='padding-left: 5px;'><img src='/temp/image/L.png' height='20px'><img src='/temp/image/category2.png' height='20px'> 카테고리(소분류)</td>"+
        "<td></td>"+
        "<td></td>"+
        "<td><a href='#'><img src='/temp/image/open.png' height='12px' name='open'></a></td>"+
>>>>>>> 409df9f7bf3ecd56ce3a92b46041213b1f1ae02b:temp/js/categoryAdd.js
        "</tr>"
    );

    currentRow.after(newsemiCategory);
});

//화살표에 따라서 소분류 카테고리 보이고 숨기기
$(document).ready(function () {
    // 이미지를 클릭했을 때
    $('body').on('click', 'img[name^="img-"]', function () {
        // 클릭한 이미지에 따라 상태 변경
        toggleImageState($(this));
    });
});

// 카테고리의 이미지 상태를 변경하는 함수
function toggleImageState(clickedImage) {
    // 클릭한 이미지의 이름에 따라 분기
    var imageName = clickedImage.attr('name');
    var hiderow = clickedImage.closest('tr');

    switch (imageName) {
        case 'img-allow_down':
<<<<<<< HEAD:admin/js/categoryAdd.js
            clickedImage.attr('src', '../../image/allow_up.png');
=======
            clickedImage.attr('src', '/temp/image/allow_up.png');
>>>>>>> 409df9f7bf3ecd56ce3a92b46041213b1f1ae02b:temp/js/categoryAdd.js
            clickedImage.attr('name', 'img-allow_up');
            hiderow.nextAll('.category1').show();
            break;
        case 'img-allow_up':
<<<<<<< HEAD:admin/js/categoryAdd.js
            clickedImage.attr('src', '../../image/allow_down.png');
=======
            clickedImage.attr('src', '/temp/image/allow_down.png');
>>>>>>> 409df9f7bf3ecd56ce3a92b46041213b1f1ae02b:temp/js/categoryAdd.js
            clickedImage.attr('name', 'img-allow_down');
            hiderow.nextAll('.category1').hide();
            break;        
        case 'img-close':
<<<<<<< HEAD:admin/js/categoryAdd.js
            clickedImage.attr('src', '../../image/open.png');
            clickedImage.attr('name', 'img-open');
            break;
        case 'img-open':
            clickedImage.attr('src', '../../image/close.png');
=======
            clickedImage.attr('src', '/temp/image/open.png');
            clickedImage.attr('name', 'img-open');
            break;
        case 'img-open':
            clickedImage.attr('src', '/temp/image/close.png');
>>>>>>> 409df9f7bf3ecd56ce3a92b46041213b1f1ae02b:temp/js/categoryAdd.js
            clickedImage.attr('name', 'img-close');
    }
}

