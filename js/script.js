
let userName = prompt('Ваше имя');
userFatherName = prompt('Ваше отчество');
userSurName = prompt('Ваша фамилия');
user = userName + ' ' + userFatherName + ' ' + userSurName; 
userAge = prompt('Ваш возраст в годах');
userGender = confirm('Ваш пол - мужской?');


(userGender == true) ? userGender = ('мужской') : userGender = ('женский');

let pension;

(userAge >= 60) ? pension = ('Вы на пенсии: да') : pension = ('Вы на пенсии: нет');



alert('ваше ФИО:' + ' ' + user + '\n' +
    'ваш возраст в годах:' + ' ' + userAge + '\n' +
    'ваш возраст в днях:' + ' ' + userAge * 365 + '\n' +
    'через пять лет вам будет:' + ' ' + (Number(userAge) + 5) + '\n' +
    'ваш пол:' + ' ' + userGender + '\n' + pension);