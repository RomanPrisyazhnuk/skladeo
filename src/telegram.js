import axios from 'axios';

const token = '1788799923:AAGmaKl1lyt4OgpPfRd6HNjg7lnrYxbFAj4';
const chatId = '-434718781';

export const sendMessageToBot = (number, text) => {
    axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${`Пользователь с номером ${number} хочет ${text}`}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
};
