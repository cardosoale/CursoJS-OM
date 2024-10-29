// import validator from "validator";

export default class Contato {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.errors = [];
    }

    init() {
        if (this.form) {
            this.events();
        }
    }

    events() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        // Limpa todos os erros anteriores
        this.clearErrors();

        const form = e.target;
        const nomeInput = form.querySelector('input[name="nome"]');
        const emailInput = form.querySelector('input[name="email"]');
        const telefoneInput = form.querySelector('input[name="telefone"]');

        if (!nomeInput.value.trim()) {
            this.createError(nomeInput, 'Nome é um campo obrigatório');
        }

        if (!emailInput.value && !telefoneInput.value) {
            this.createError(emailInput, 'Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
        }

        // if (emailInput(validator.isEmail(emailInput.value))) {
        //     this.createError(emailInput, 'Email precisa ser válido');
        // }

        if (this.errors.length === 0) {
            form.submit();
        }
    }

    createError(field, msg) {
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