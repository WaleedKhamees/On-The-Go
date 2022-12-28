const validateNumber = (number) => {
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
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
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
    if (!validateNumber(user.wallet)) {
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
export const validateProductForm = (product) => {
    const res = {
        name: "",
        description: "",
        price: "",
        imgUrl: ""
    };
    let error = false;
    if (!validateName(product.item_name)) {
        error = true;
        res.name = "Please enter a valid product name";
    }
    if (!validateName(product.item_desc)) {
        error = true;
        res.description = "Please enter a valid product Description";
    }
    if (!validateNumber(product.item_price) || !product.item_price) {
        error = true;
        res.price = "Please enter a non-negative number";
    }
    if (!validateName(product.img_url)) {
        error = true;
        res.imgUrl = "Please insert a image url";
    }
    return { error, res };
}
export const validateEmployeeForm = (employee) => {
    const res = {
        name: "",
        times: "",
        supervise_ID: "",
        branch_ID: "",
        salary: "",
        email: "",
        password: ""
    }
    let error = false;
    const nameValidation = !validateName(employee.first_name) || !validateName(employee.last_name);
    const emailValidation = !validateEmail(employee.email);
    const timesValidation = !validateString(employee.StartTime) || !validateString(employee.EndTime);
    const salaryValidation = !validateNumber(employee.salary);
    const passwordValidation = !validateName(employee.password);
    if (nameValidation || emailValidation || timesValidation || salaryValidation || passwordValidation)
        error = true;
    if (nameValidation)
        res.name = "Please enter a valid Name";
    if (emailValidation)
        res.email = "Please enter a valid email";
    if (timesValidation)
        res.times = "Please enter valid times";
    if (salaryValidation)
        res.salary = "Please enter a valid salary (non negative number)";
    if (passwordValidation)
        res.password = "Please enter a valid password";

    return { error, res };
}


export const validateDiscountForm = (discount) => {
    const res = {
        endDate: "",
        discountPercent: ""
    }
    let error = false;
    //const percentageValidation = !validatePercentage(discount.discount_percent);
    if (percentageValidation)
        error = true;
    if (percentageValidation)
        res.discountPercent = "Please enter a valid Precentage";

    return { error, res };
}
