import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGE = "show-error-message";
const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const repeatPassword = document.querySelector(".password2") as HTMLInputElement;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  hideErrorMessage(this);
  checkForEmptyFields(username, email, password, repeatPassword);
  checkEmail(email);
  checkEqualPasswords(password, repeatPassword);
  if (shouldSendForm(this)) console.log("FORMULÁRIO ENVIADO   ");
});

function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove());
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, "Campo não pode ficar vazio");
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, "E-mail inválido");
}

function checkEqualPasswords(
  password: HTMLInputElement,
  repeatPassword: HTMLInputElement
) {
  if (password.value !== repeatPassword.value) {
    showErrorMessage(password, "Senhas não batem");
    showErrorMessage(repeatPassword, "Senhas não batem");
  }
}

function showErrorMessage(input: HTMLInputElement, message: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    ".error-message"
  ) as HTMLSpanElement;
  errorMessage.innerText = message;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll("." + SHOW_ERROR_MESSAGE).forEach(() => (send = false));

  return send;
}
