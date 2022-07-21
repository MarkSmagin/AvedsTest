export const validate = (userLogin, userPassword) => {
  if (userLogin == "") {
    alert("Заполните поле логин");
    return false;
  }
  if (userPassword == "") {
    alert("Заполните поле пароль");
    return false;
  }
  if (userLogin.length < 4 && userLogin.length > 16) {
    alert("Поле логин должно содержать от 4 до 16 символов");
    return false;
  }
  if (userPassword.length < 8) {
    alert("Поле логи должно содержать больше 8 символов");
    return false;
  }
  if (!(/^[А-Яа-яA-Za-z0-9]{4,40}$/).test(userLogin)) {
    alert("Поле логи может содержать только буквы и цифры");
    return false;
  }
}
