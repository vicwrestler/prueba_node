const CtrlUser = {};
CtrlUser.newUserForm = (req, res) => {
    res.render('./users/new-user');
};
CtrlUser.newUserSave = (req, res) => {
    console.log(req.body);
    res.send('envio de datos');
};
module.exports = CtrlUser;