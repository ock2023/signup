const currentYear = new Date().getFullYear();
const startYear = 1990;
const birthYearSelect = document.getElementById("birthYearSelect");
const birthMonthSelect = document.getElementById("birthMonthSelect");
const birthDaySelect = document.getElementById("birthDaySelect");

for (let year = currentYear; year >= startYear; year--) {
  const yearOption = document.createElement("option");
  yearOption.value = year;
  yearOption.textContent = year;
  birthYearSelect.append(yearOption);
}
for (let month = 1; month <= 12; month++) {
  const monthOption = document.createElement("option");
  monthOption.value = month;
  monthOption.textContent = month;
  birthMonthSelect.append(monthOption);
}

for (let day = 1; day <= 31; day++) {
  const dayOption = document.createElement("option");
  dayOption.value = day;
  dayOption.textContent = day;
  birthDaySelect.append(dayOption);
}

// 중복확인 버튼을 클릭했을 때,
// 아이디가 중복이 없으면
// document.getElementById("id-available").style.display = "block";
// 중복이면
// document.getElementById("id-exists").style.display = "block";

// 비밀번호를 입력했을 때,
// 형식에 맞게 작성하면
// document.getElementById("password-available").style.display = "block";
// 형식에 맞지 않으면
// document.getElementById("password-guidance").style.display = "block";

// 비번확인 버튼 클릭했을 때,
// 위에 입력한 비밀번호와 같지않으면
// document.getElementById("password-mismatch").style.display = "block";
