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
    /* 
     {
        email: form.Email.value,
        password: form.Password.value,
        first_name: form.FName.value,
        last_name: form.LName.value,
        StartTime: form.Stime.value,
        EndTime: form.Etime.value,
        TypeofEmployee: form.Typeofemployee.value,
        Supervise_ID: form.SupervisorID.value ?? null,
        Branch_ID: form.BranchID.value,
        salary: form.Salary.value,
     }
    */
    let error = false;
    if (!validateName(employee.first_name) || !validateName(employee.last_name)) {
        error = 1;
        res.name = "please enter a valid Name";
    }
    if (!validateName(employee.StartTime) || !validateName(employee.EndTime)) {
        error = 1;
        res.times = "please enter valid times";
    }
    if (!validateNumber(Supervise_ID)) {
        error = 1;
        res.supervise_ID = "please enter a valid supervisor ID";
    }
    // to be completed 
}
