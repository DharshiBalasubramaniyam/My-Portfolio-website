const contactForm = document.getElementById("contact-form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const body = document.getElementById("body")
const error = document.getElementById("error")

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validateFields()) {
        sendMail()
        resetFields()
    }
})

function validateFields() {
    let error_message = ""
    if (name.value.trim() === "") {
        error_message = "Your name is required!"
    }
    else if (email.value.trim() === "") {
        error_message = "Your email is required!"
    }
    else if (subject.value.trim() === "") {
        error_message = "Subject is required!"
    }
    else if (body.value.trim() === "") {
        error_message = "Message is required!"
    }
    error.textContent = error_message
    return error_message === "";
}

function sendMail() {
    const sender_name = name.value.trim();
    const sender_email = email.value.trim();
    const mail_subject = subject.value.trim();
    const mail_body = body.value.trim();

    const mail_link = "mailto:dharshib.8@gmail.com" +
        "?Subject=" + encodeURIComponent(mail_subject) +
        "&body=Hi Dharshi, \nI am " + sender_name + ", found you through your portfolio.\n" + encodeURIComponent(mail_body)

    window.location.href = mail_link;
}

function resetFields() {
    name.value = ""
    email.value = ""
    subject.value = ""
    body.value = ""
}
