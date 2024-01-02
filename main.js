const d = document;
const $input = d.querySelectorAll("input");
const $password = d.querySelector("input[id='password']");
const $confirmPassword = d.querySelector("input[id='confirm-password']");
const $pConfirmPass = d.querySelector(`p[data-name="confirm-password"]`);

const toggleClass = (inp) => {
  const inpId = inp.id;
  const labelId = d.querySelector(`label[for="${inpId}"]`);
  if (inp.value !== "") {
    labelId.classList.add("label2");
  } else {
    labelId.classList.remove("label2");
  }
};

const ifInvalid = (inp) => {
  const inpId = inp.id;
  const pName = d.querySelector(`p[data-name="${inpId}"]`);
  if (inp.matches(":invalid")) {
    pName.classList.remove("hidden");
  } else {
    pName.classList.add("hidden");
  }
};

const passwordIsSame = () => {
  if ($password.value !== $confirmPassword.value) {
    $pConfirmPass.classList.remove("hidden");
  } else {
    $pConfirmPass.classList.add("hidden");
  }
};

$input.forEach((inp) => {
  inp.addEventListener("blur", (e) => {
    toggleClass(inp);
    ifInvalid(inp);
    passwordIsSame();
  });
});

$confirmPassword.addEventListener("keyup", (e) => {
  passwordIsSame();
});
