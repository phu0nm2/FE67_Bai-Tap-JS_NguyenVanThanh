/** 1. In 1 bảng số từ 1-100
 * 1.1: Gồm 10 hàng, 10 cột
 * 1.2: Các giá trị trong hàng là liên tiếp nhau
 * 1.3: Các giá trị trong cột hơn kém nhau 10
 */
var createTable = function () {
  // var containerTable = document.getElementById("containerTable");
  // var table = document.createElement("table");
  // table.style.border = "1px solid black";
  // //   var tableBody = document.createElement("tbody");
  // //   table.appendChild(tableBody);
  // for (var i = 1; i <= 90; i += 10) {
  //   var tr = document.createElement("tr");
  //   table.appendChild(tr);
  //   for (var j = 0; j < 10; j -= 10) {
  //     var td = document.createElement("td");
  //     var textNode = document.createTextNode(i + j);
  //     td.appendChild(textNode);
  //     //   td.appendChild(document.createTextNode(10));
  //     tr.appendChild(td);
  //   }
  // }
  // containerTable.appendChild(table);
  var so = "";
  for (var i = 1; i <= 100; i += 10) {
    for (var j = 0; j < 10; j++) {
      so += i + j + " ";
    }
    so += "\n";
  }
  console.log(so);
};
createTable();

/** 2. Viết function nhận vào tham số là một mảng số nguyên,tìm và in ra các số
nguyên tố trong mảng
 * Số nguyên tố: lớn hơn 1 và chia hết cho 1 vàS chính nó
 */
var checkSNT = function (arr) {
  if (arr < 2) {
    return false;
  } else {
    for (var i = 2; i < arr; i++) {
      if (arr % i == 0) {
        return false;
      }
    }
    return true;
  }
};

for (var i = 0; i < 10; i++) {
  if (checkSNT(i)) {
    console.log("Số nguyên tố: " + i);
  }
}

/** 3. Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n
 *
 */

function calcS(n) {
  var S = 0;
  var kq = 0;
  for (var i = 2; i <= n; i++) {
    S = S + i;
  }
  //   console.log(S);
  kq = S + 2 * n;
  console.log("Tong S = " + kq);
}
calcS(7);

/** 4. Viết function nhận vào tham số n, tính số lượng ước số của n. Vd: n = 8 =>
Ước số của 8 là : 8,4,2,1
*/

var calcUocSo = function (n) {
  var dem = 0;
  for (var i = 0; i <= n; i++) {
    if (n % i == 0) {
      dem++;
    }
  }
  console.log("Số lượng ước số: " + dem);
};
calcUocSo(8);

/** 5. Viết chương trình tìm số đảo ngược của 1 số nguyên dương n nhập từ bàn
phím.Vd :1234 => 4321 (Gợi y: duyệt chuỗi giống như duyệt mảng)
 *
 */
var soDao = function () {
  var n = "987654321";
  console.log(typeof n);

  var str = n.length;
  for (var i = str - 1; i >= 0; --i) {
    document.write(n[i]);
  }
};
soDao();

/** 6. Tìm x nguyên dương lớn nhất, biết 1+2+3+...+x ≤100
 *
 */
var xMax = function (n) {
  // if (x < 0) return;
  var sum = 0;

  // var xLength = x.length;
  for (var i = 0; i < n; i++) {
    sum = sum + i;
  }
  if (sum >= 100) {
    console.log("Nhap lai x: ");
    return;
  } else {
    var max = [n];

    // for (var j = 1; j < n; j++) {
    //   if (max < [j]) return [j];
    // }
    console.log("Max: " + max);
  }
  console.log(sum);
};
xMax(10);

/** 7. Viết function nhận vào số n, in ra bảng cửu chương tương ứng với số đó. 
Vd: n = 3
 * 
 */
var tableMulti = function (n) {
  var kq = 0;
  console.log("Bảng cửu chương: ");
  for (var i = 0; i <= 10; i++) {
    kq = n * [i];
    console.log(n + "x" + [i] + "=" + kq);
  }
};
tableMulti(3);

/** 8.
 * Chia theo luật chia bài
 * Lần lượt mỗi người 1 lá, tổng 1 người 3 lá
 *
 */

var players = [[], [], [], []];

var cards = [
  "4K",
  "KH",
  "5C",
  "KA",
  "QH",
  "KD",
  "2H",
  "10S",
  "AS",
  "7H",
  "9K",
  "10D",
];

var chiaBai = function () {
  console.log(cards);
  // cach 1:
  // players[0].push(cards[0], cards[4], cards[8]);
  // players[1].push(cards[1], cards[5], cards[9]);
  // players[2].push(cards[2], cards[6], cards[10]);
  // players[3].push(cards[3], cards[7], cards[11]);
  // console.log("Player1 = " + players[0].join(" "));
  // console.log("Player2 = " + players[1].join(" "));
  // console.log("Player3 = " + players[2].join(" "));
  // console.log("Player4 = " + players[3].join(" "));
  // cach 2:
  for (var i = 0; i < cards.length; i += 4) {
    players[0].push(cards[i]);
  }
  console.log(players[0]);
  for (var i = 1; i <= cards.length; i += 4) {
    players[1].push(cards[i]);
  }
  console.log(players[1]);
  for (var i = 2; i <= cards.length; i += 4) {
    players[2].push(cards[i]);
  }
  console.log(players[2]);
  for (var i = 3; i <= cards.length; i += 4) {
    players[3].push(cards[i]);
  }
  console.log(players[3]);
};
chiaBai();

/** 9. Vừa gà vừa chó, bó lại cho tròn, 36 con, 100 chân chẵn
 * Đ/s: 22 con gà và 14 con chó
 *     44 chân gà    56 chân chó
 *  m = tổng gà và chó
 *  n = tổng só chân
 *  y/c: Nhập m = tổng số chó và gà, n = tổng số chân
 *  ==> tìm m và n
 *  x + y = 36
 *  2x + 4y = 100
 *  Giải theo phương pháp Cramer
 * http://vuphong90.freevnn.com/hept.txt?i=1
 */

var findTwoHidden = function () {
  var a1 = 1,
    b1 = 1,
    c1 = 36,
    a2 = 2,
    b2 = 4,
    c2 = 100,
    x,
    y,
    d,
    dx,
    dy;
  d = a1 * b2 - a2 * b1;
  dx = c1 * b2 - c2 * b1;
  dy = a1 * c2 - a2 * c1;

  if (d == 0) {
    if (dx == 0 && dy == 0) {
      console.log("Phương trình vô số nghiệm!");
    } else {
      console.log("Phương trình vô nghiệm!");
    }
  } else {
    x = dx / d;
    y = dy / d;
    console.log("Phương trình có nghiệm: \n" + "x =" + x + " , " + "y =" + y);
  }
};
findTwoHidden();
/** 10. Nhập vào số giờ và số phút => góc lệch giữa kim giờ và kim phút. Vd 6:10
 * 1 giờ = 30 độ (360/12)
 * 1 phút = 6 độ (360/60)
 * Tính khoảng cách kim giờ lệch trong 1 phút: 30/60 = 0.5 độ
 *
 * Góc lệch giữa kim giờ và kim phút:
 * |kim phút - kim giờ|
 * |(phút * 6 độ) - 0.5 độ * (giờ * 60 + phút)|
 */

var gocLech = function (gio, phut) {
  var gio;
  var phut;
  var goclech = Math.abs(phut * 6 - 0.5 * (gio * 60 + phut));
  console.log("Góc lệch: " + goclech);
};
gocLech(6, 10);
