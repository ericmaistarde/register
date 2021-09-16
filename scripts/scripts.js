const $button = document.querySelector(".button-form")
const $fieldConfirmPassword = document.getElementById("confirm-password")
const $fieldpassword = document.getElementById("password")
const $passwordVisible = document.querySelector(".password-visible")

const $checkBox = document.getElementById("check-box")

const $testeNone = document.querySelector(".teste")

let valueOfcheckbox, valueOfName, valueOfEmail, valueOfPassword, valueOfConfirmPassword = false

const verifyName = () => {
    const $fieldName = document.getElementById("field-name")
    if ($fieldName.value !== "") {
        $fieldName.classList.add("okay")
        valueOfName = true
    } else {
        $fieldName.classList.add("error")
        setTimeout(() => $fieldName.classList.remove("error"), 5000)
    }
}

const verifyEmail = () => {
    const $fieldEmail = document.getElementById("field-email")
    if ($fieldEmail.value !== "") {
        $fieldEmail.classList.add("okay")
        valueOfEmail = true
    } else {
        $fieldEmail.classList.add("error")
        setTimeout(() => $fieldEmail.classList.remove("error"), 5000)
    }
}
const verifyPassword = () => {
    if ($fieldpassword.value !== "" && $fieldpassword.value === $fieldConfirmPassword.value) {
        $fieldpassword.classList.add("okay")
        valueOfPassword = true
    } else {
        const $labelPassword = document.getElementById("label-password")
        $labelPassword.textContent = "algo deu errado!!!"
        $labelPassword.classList.add("error-message")

        $fieldpassword.classList.add("error")
        setTimeout(() => $fieldpassword.classList.remove("error"), 5000)
        setTimeout(() => {
            $labelPassword.textContent = "Senha"
            $labelPassword.classList.remove("error-message")
        }, 5000)
    }
}
const verifyConfirmPassword = () => {
    if ($fieldConfirmPassword.value !== "" && $fieldpassword.value === $fieldConfirmPassword.value) {
        $fieldConfirmPassword.classList.add("okay")
        valueOfConfirmPassword = true
    } else {
        const $labelConfirmPassword = document.getElementById("label-confirm-password")
        $labelConfirmPassword.textContent = "algo deu errado!!!"
        $labelConfirmPassword.classList.add("error-message")

        $fieldConfirmPassword.classList.add("error")
        setTimeout(() => $fieldConfirmPassword.classList.remove("error"), 5000)
        setTimeout(() => {
            $labelConfirmPassword.textContent = "Confirmar senha"
            $labelConfirmPassword.classList.remove("error-message")
        }, 5000)
    }
}

const verifyChecked = () => {

    if ($checkBox.checked) {
        valueOfcheckbox = true
    } else {
        setTimeout(() => alert("você precisa aceitar os termos de uso para continuar"), 300)
    }
}

$button.addEventListener("click", (e) => {
    e.preventDefault()

    verifyName()
    verifyEmail()
    verifyPassword()
    verifyConfirmPassword()
    verifyChecked()
    if (valueOfcheckbox === true && valueOfName === true && valueOfEmail === true && valueOfPassword === true && valueOfConfirmPassword === true) {
        $testeNone.classList.add("teste-none")

        const $titleRegister = document.getElementById("title-register")
        $titleRegister.textContent = "Parabéns você é um miranha agora,bem vindo ao miranhaVERSO"

        // const _container = document.createElement("div")
        // _container.classList.add("logado")

        // const _message = document.createElement("span")
        // _message.classList.add("span-logado")
        // _message.textContent = "Parabéns você é um miranha agora"

        // _container.appendChild(_message)

        // console.log(_container)
    }
})

$passwordVisible.addEventListener("click", (e) => {
    e.preventDefault()

    $fieldConfirmPassword.removeAttribute("type")
    $fieldpassword.removeAttribute("type")

//     setTimeout(() => {
//         $fieldpassword.innerHTML = `
//         <div class="text-field">
//             <label for="password" id="label-password">senha</label>
//             <input type=${"password"} id="password" placeholder="crie uma senha">
//         </div>
//         `
//     }, 3000)
})





