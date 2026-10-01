let currentOrderCode = "";
let isOrderValid = false;
let totalRevenue = 0;
let totalOrders = 0;
let choice;

do {
  console.log("=".repeat(50));
  console.log("HỆ THỐNG THANH TOÁN NHÀ SÁCH TRI THỨC");
  console.log("=".repeat(50));
  console.log("1. Nhập và kiểm chuẩn mã đơn hàng");
  console.log("2.Tính tiền đơn sách");
  console.log("3.Thẩm định mã hóa đơn may mắn");
  console.log("0 Thoát khỏi chương trình");
  console.log("=".repeat(50));
  choice = prompt("Vui lòng nhập lựa chọn (0 - 3): ").trim();
  switch (choice.trim()) {
    case "1":
      let currentOrderCode = "";
      let isOrderValid = false;
      currentOrderCode = prompt("Nhập mã đơn hàng: ").trim().toUpperCase();
      While(currentOrderCode);
      if (currentOrderCode === "") {
        console.log("Chưa nhập mã đơn hàng");
        break;
      }
      if (currentOrderCode.length >= 6) {
        console.log("Độ dài phải nhỏ hơn 6");
      }
      if (currentOrderCode !== "BOK-") {
        console.log("Phải bắt đầu bằng BOK");
      }
      if (currentOrderCode.startsWith("BOK-")) {
        isOrderValid = true;
        console.log("Mã đơn hàng hợp lệ");
      }
      console.log("Mã đơn hàng là: " + currentOrderCode);
      break;
    case "2":
      if (!isOrderValid) {
        console.log("Vui lòng nhập mã đơn hàng hợp lệ");
        break;
      }
      bookCount = parseInt(prompt("Nhập số lượng sách: "));
      if (isNaN(bookCount) || bookCount <= 0) {
        console.log("Số lượng phải là số nguyên dương");
        break;
      }
      pricePerBook = parseFloat(prompt("Nhập giá sách: "));
      if (isNaN(pricePerBook) || pricePerBook <= 0) {
        console.log("Giá sách phải là số dương");
        break;
      }
      let baseCost = bookCount * pricePerBook;
      if (bookCount >= 4) {
        baseCost *= 0.1;
      }
      let discount = 0;
      if (bookCount >= 4) {
        discount = baseCost * 0.1;
      }

      let packagingFee = Math.round((baseCost - discount) * 0.08);
      let totalPayment = Math.round(baseCost - discount + packagingFee);
      console.log("Mã đơn hang: " + currentOrderCode);
      console.log("Chi phí cơ sở: " + baseCost.toLocaleString("vi-VN"));
      console.log("Tiền giảm giá: " + discount);
      console.log("Phí bọc sách và đóng gói: " + packagingFee);
      console.log("Tổng thanh toán: " + totalPayment.toLocaleString("vi-VN"));
      totalRevenue += totalPayment;
      totalOrders++;
      break;

    case "3":
        let maHoaDon = prompt("Nhập mã hóa đơn: ").trim();
      let reversedCode = maHoaDon.split("").reverse().join("");
      let isPalindrome = maHoaDon === reversedCode;
      let digitSum = 0;
      for (let i = 0; i < maHoaDon.length; i++) {
        digitSum += Number(maHoaDon[i]);
      }
      if (!isPalindrome) {
        console.log("Mã hóa đơn không đối xứng.");
        break;
      }
      if (digitSum % 9 !== 0) {
        console.log(
          "Mã hóa đơn không hợp lệ vì tổng chữ số không chia hết cho 9.",
        );
        break;
      }
      console.log("Mã hóa đơn hợp lệ.");
      console.log("Chuỗi gốc: " + maHoaDon);
      console.log("Chuỗi đảo ngược: " + reversedCode);
      console.log("Tổng chữ số: " + digitSum);
      break;
    case "0":
      console.log("Thoát khỏi chương trình.");
      break;
    default:
      console.log(" Vui lòng chỉ chọn từ 1 - 3");
  }
} while (choice !== "0" && choice !== null);
