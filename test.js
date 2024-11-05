// 吃啥陣列
function showArray1() {
    const array = ['雞排', '便當', '麥當勞+獵人限定卡包', '肯德基', '一蘭拉麵', '義大利麵', '香脆脆油渣渣', '豬腳飯', '海霸堡', '美味蟹堡'];
    var x = Math.random();
    x = parseInt(x * 10);
    // alert(x);
    alert(array[x]); // 將陣列轉換為字串並顯示
}
// 甜點陣列
function showArray2() {
    const array = ['冰淇淋', '珍珠奶茶', '草莓牛奶冰', '芒果牛奶冰', '雞蛋糕', '法國焦糖奶油酥', '香脆脆油渣渣','手工麻糬','韓國餅乾','泡芙'];
    var x = Math.random();
    x = parseInt(x * 10);
    // alert(x);
    alert(array[x]); // 將陣列轉換為字串並顯示
}
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


const monthYear = document.getElementById("monthYear");
const datesContainer = document.getElementById("dates");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    monthYear.textContent = `${year}年 ${month + 1}月`;

    // 清空日期容器
    datesContainer.innerHTML = '';

    // 獲取該月份的第一天和最後一天
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayIndex = firstDay.getDay();
    const lastDate = lastDay.getDate();

    // 添加空白日期
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("date", "empty");
        datesContainer.appendChild(emptyDiv);
    }

    // 添加當月的日期
    for (let i = 1; i <= lastDate; i++) {
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");
        dateDiv.textContent = i;
        datesContainer.appendChild(dateDiv);
    }
}

// 事件處理器
prevButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// 初始渲染
renderCalendar(currentDate);
