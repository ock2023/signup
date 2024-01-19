let idInfo = [];

let idInput = document.getElementById("idInput");
let passInput = document.getElementById("passwordInput");
let passCheckInput = document.getElementById("passwordCheckInput");

let idChecked = false;
let passChecked = false;

const onChangeId = (e) => {
  idInput.value = e.target.value;
  // id 입력이 변경될 때마다 중복확인 상태를 false로 초기화
  idChecked = false;
};
const passwordAvailable = document.getElementById("password-available");
const passwordGuidance = document.getElementById("password-guidance");
const onChangePassword = (e) => {
  passInput.value = e.target.value;
  passChecked = false;

  const passwordFormat =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[.,@$!%*?&])[A-Za-z\d.,@$!%*?&]{8,}$/;
  const isValidPassword = passwordFormat.test(passInput.value);

  if (isValidPassword) {
    passwordAvailable.style.display = "block";
    passwordGuidance.style.display = "none";
  } else {
    passwordAvailable.style.display = "none";
    passwordGuidance.style.display = "block";
  }
};

const onChangePassCheck = (e) => {
  passCheckInput.value = e.target.value;
  passChecked = false;
};

const idAvailable = document.getElementById("id-available");
const passMatch = document.getElementById("password-match");

const onClickIdBtn = (e) => {
  e.preventDefault();
  const enteredId = idInput.value.trim();
  const idExists = document.getElementById("id-exists");
  const emailCheck = document.getElementById("email-check");

  idExists.style.display = "none";
  idAvailable.style.display = "none";
  emailCheck.style.display = "none";

  const emailFormat = /\S+@\S+\.\S+/;
  if (emailFormat.test(idInput.value)) {
    if (idInfo.includes(enteredId)) {
      idExists.style.display = "block";
    } else {
      idAvailable.style.display = "block";

      idChecked = true;
    }
  } else {
    emailCheck.style.display = "block";
  }
};

const onClickPassBtn = (e) => {
  e.preventDefault();
  if (
    passInput.value !== passCheckInput.value ||
    passInput.value === "" ||
    passCheckInput.value === ""
  ) {
    document.getElementById("password-mismatch").style.display = "block";
    document.getElementById("password-match").style.display = "none";
  } else if (passInput.value === passCheckInput.value) {
    document.getElementById("password-mismatch").style.display = "none";
    document.getElementById("password-match").style.display = "block";

    passChecked = true;
  }
};

const onClickJoinBtn = (e) => {
  e.preventDefault();

  if (!idChecked) {
    alert("아이디 중복확인을 해주세요.");
    return;
  }

  if (!passChecked) {
    alert("비밀번호 확인을 해주세요.");
    return;
  }

  if (
    idInput.value === "" ||
    passInput.value === "" ||
    passCheckInput.value === ""
  ) {
    alert("모든 칸을 채워주세요.");
    return;
  }
  const enteredId = idInput.value.trim();
  idInfo.push(enteredId);
  console.log(idInfo);
  idInput.value = "";
  passInput.value = "";
  passCheckInput.value = "";
  idAvailable.style.display = "none";
  passwordAvailable.style.display = "none";
  passMatch.style.display = "none";
};

idInput.addEventListener("input", onChangeId);
passInput.addEventListener("input", onChangePassword);
passCheckInput.addEventListener("input", onChangePassCheck);
document.getElementById("idCheckBtn").addEventListener("click", onClickIdBtn);
document
  .getElementById("passCheckBtn")
  .addEventListener("click", onClickPassBtn);
document.getElementById("signUp").addEventListener("click", onClickJoinBtn);
