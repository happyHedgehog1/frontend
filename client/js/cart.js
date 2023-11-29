
let quantity = 1;

  function decreaseQuantity() {
    // 수량이 1보다 작을 수 없도록 설정
    if (quantity > 1) {
      quantity--;
    }
    updateQuantityDisplay();
  }

  function increaseQuantity() {
    // 수량 증가
    quantity++;
    updateQuantityDisplay();
  }

  function updateQuantityDisplay() {
    // 수량을 화면에 표시
    document.getElementById("quantity-display").innerText = quantity;
  }