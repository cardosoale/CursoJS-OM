const Login = require('../models/LoginModel ');

exports.index = (req, res, next) => {
    if (req.session.user) return res.render('login-log');
    return res.render('login');
};

exports.register = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function () {
            return res.redirect('back');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.login = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', 'Agora você está logado.');
        req.session.user = login.user;
        if (!req.session.user) {
            req.flash('errors', 'Você precisa fazer login.');
            return res.redirect('back');
        }
        req.session.save(function () {
            return res.redirect('back');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.logout = (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
}

