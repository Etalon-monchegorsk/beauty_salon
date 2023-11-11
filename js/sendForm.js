let Form = document.querySelector("form");
let sendButton = document.querySelector(".btn")

Form.onsubmit = function () {
    let serviceName = document.querySelector("select").value;
    let name = document.querySelector(".name").value;
    let tell = document.querySelector(".tell").value;
    let datetime = document.querySelector(".datetime").value;
    let decoration = "-------------------------------------------------------------"

    let textMessage = `❗Новая заявка с сайта ЭТАЛОН!❗\n${decoration}\n⚙️Услуга - ${serviceName}\n\n📋Имя - ${name}\n\n📞Телефон - ${tell}\n\n📆Дата и время - ${datetime}`
    let token = "6634744544:AAHf_agyFz8UfBsYEm7-CzITSbIxr41LoLM";
    let id = "924924038";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const params = {
        chat_id: id,
        text: textMessage,
    };
    axios.post(url, params)
        .then(response => {
            console.log('Сообщение успешно отправлено:', response.data);
            let divWrapperForm = document.querySelector(".form-wrapper");
            divWrapperForm.classList.add("form-wrapper_active");
            setTimeout(() => {
                Form.reset();
                divWrapperForm.classList.remove("form-wrapper_active");
            }, 3000); 
        })
        .catch(error => {
            console.error('Ошибка при отправке сообщения:', error);
            let divWrapperFormError = document.querySelector(".form-wrapper-error");
            divWrapperFormError.classList.add("form-wrapper-error_active");
            setTimeout(() => {
                Form.reset();
                divWrapperForm.classList.remove("form-wrapper-error_active");
            }, 3000);
        });
        
        return false
}