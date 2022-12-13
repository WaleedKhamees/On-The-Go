export const validateWallet = (number) => {
    if (Number.isNaN(number)) return false;
    if (parseFloat(number) < 0) return false;
    else return true;
};

export const validateName = (Name) => {
    if (Name === "") return false;
    if (!Number.isNaN(Name)) return false;
    else return true;
};
export const validateString = (string) => {
    if (string === "") return false;
    else return true;
};
export const validateSignup = (user) => {
    let res = {
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
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email))) {
        res.emailError = "please enter a valid e-mail";
        error = true;
    }
    if (!(validateString(user.password))) {
        res.passwordError = "please enter a valid password";
        error = true;
    }
    return { error, res };

};
