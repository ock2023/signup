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
