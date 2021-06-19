const button = document.getElementById('send');
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const alertion = document.querySelector('.alertion');

function clearAlertion() {
  alertion.innerHTML = '⠀';
}

button.addEventListener('click', () => {
  const emailVal = email.value;
  const nameVal = nameInput.value;
  const telVal = tel.value;
  if(nameInput.value === '') {
    alertion.innerHTML = 'Пожалуйста введите имя'
  } else {
    if (email.value === '' && tel.value === '') {
      alertion.innerHTML = 'Пожалуйста введите либо email, либо телефон для связи'
    } else {
      firebase.database().ref(nameVal).set({
        name: nameVal,
        email: emailVal,
        tel: telVal,
      });
      alertion.innerHTML = 'Ваши данные успешно отправлены на обработку!'
    }
  }


});

email.addEventListener('click', () => {
  clearAlertion();
});
tel.addEventListener('click', () => {
  clearAlertion();
});