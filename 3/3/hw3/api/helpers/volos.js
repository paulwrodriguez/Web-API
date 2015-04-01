/**
 * Created by Paul on 3/30/2015.
 */

module.exports = {
    passwordCheck: passwordCheck
};

function passwordCheck(username, password, cb) {
    var passwordOk = (username === 'cuuser' && password === 'gobuffs');
    console.log('inside passwordcheck. value = ' + passwordOk); // error check
    cb(null, passwordOk);
}
