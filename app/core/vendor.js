module.exports = function () {
    /* Styles */
    require('../index.scss');
    
    /* JS */
    require('angular');
    require('angular-ui-router');
    require('oclazyload');

    /* features controller */
    require('../features/home');
    require('../features/login');
};
