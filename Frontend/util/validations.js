const validateWallet = (number) => {
    if (Number.isNaN(number)) return false;
    if (parseFloat(number) < 0) return false;
    else return true;
};

const validateName = (Name) => {
    if (Name === "") return false;
    if (!Number.isNaN(Number.parseInt(Name))) return false;
    else return true;
};

const validateString = (string) => {
    if (string === "") return false;
    else return true;
};

const validateEmail = (email) => {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) return false;
    else return true;

}
export const validateSignup = (user) => {
    console.log(user);
    const res = {
        nameError: "",
        emailError: "",
        passwordError: "",
        walletError: "",
    };
    let error = false;
    if (!validateWallet(user.wallet)) {
        res.walletError = "please enter a non-negative number";
        error = true;
    }
    if (!validateName(user.first_name) || !validateName(user.last_name)) {
        res.nameError = "please enter a valid name";
        error = true;
    }
    if (!validateEmail(user.email)) {
        res.emailError = "please enter a valid e-mail";
        error = true;
    }
    if (!(validateString(user.password))) {
        res.passwordError = "please enter a valid password";
        error = true;
    }
    return { error, res };

};
export const validateLogin = (user) => {
    const res =
    {
        emailError: "",
        passwordError: ""
    }
    let error = false;
    if (!validateEmail(user.email)) {
        error = true;
        res.emailError = "please enter a valid email"
    }
    if (!validateString(user.password)) {
        error = true;
        res.passwordError = "please enter a valid password"
    }
    return { error, res };
}
