function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = function () {
        this.cliquebotoes();
        this.pressionaBackSpace();
        this.pressionaEnter();
    };

    this.cliquebotoes = function () {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addDisplay(el);


            if (el.classList.contains('btn-clear')) this.clear();

            if (el.classList.contains('btn-del')) this.del();

            if (el.classList.contains('btn-eq')) this.result();


            this.display.focus();
        });
    };

    this.addDisplay = el => this.display.value += el.innerText;

    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);


    this.pressionaBackSpace = () => {
        this.display.addEventListener('keydown', e => {
            if (e.keyCode === 8) {
                e.preventDefault();
                this.clear();
            }
        });
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.result();
            }
        });
    };

    this.result = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida');
            return;
        };


    };
}


const calculadora = new Calculadora();
calculadora.inicia();