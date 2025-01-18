import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.errors = [];
    }
    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        this.clearErrors();

        const form = e.target;
        const emailInput = form.querySelector('input[name=email]');
        const passwordInput = form.querySelector('input[name=password]');


        if (!validator.isEmail(emailInput.value)) {
            this.createError(emailInput, 'Email precisa ser válido');
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.createError(passwordInput, 'Senha precisa ter entre 3 e 50 caracteres');
        }

        if (this.errors.length === 0) {
            form.submit();
        }
    }
    createError(field, msg) {
        this.clearError();

        // Remove qualquer erro existente para este campo
        this.clearError(field);

        const errorDiv = document.createElement('div');
        errorDiv.innerText = msg;
        errorDiv.classList.add('invalid-feedback');
        field.classList.add('is-invalid');

        field.parentNode.insertBefore(errorDiv, field.nextSibling);
        this.errors.push({ field, errorDiv });
    }

    clearErrors() {
        this.errors.forEach(({ field, errorDiv }) => {
            field.classList.remove('is-invalid');
            errorDiv.remove();
        });
        this.errors = [];
    }

    clearError(field) {
        const existingError = this.errors.find(error => error.field === field);
        if (existingError) {
            existingError.field.classList.remove('is-invalid');
            existingError.errorDiv.remove();
            this.errors = this.errors.filter(error => error.field !== field);
        }
    }
}

