Ext.define('MyApp.view.main.MainController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.main',


    routes : {
        'users' : 'onUsers',
        'services' : 'onServices',
        'registration' : 'onRegistration',
        'login' : 'onLogin'
    },

    requires : [
        'Ext.MessageBox'
    ],

    onUsers : function() {
        var userTab = this.lookupReference('usertab'),
            serviceTab = this.lookupReference('servicetab'),
            loginTab = this.lookupReference('logintab'),
            registrationTab = this.lookupReference('registrationtab');

        Ext.getCmp('maintab').getInnerItems().forEach(function(element) {
            element.hide();
            element.tab.hide();
        });
        userTab.show();
        userTab.tab.show();
        Ext.getCmp('maintab').setActiveItem(userTab);

    },
    onServices : function() {
        var userTab = this.lookupReference('usertab'),
            serviceTab = this.lookupReference('servicetab'),
            loginTab = this.lookupReference('logintab'),
            registrationTab = this.lookupReference('registrationtab');

        Ext.getCmp('maintab').getInnerItems().forEach(function(element) {
            element.hide();
            element.tab.hide();
        });
        serviceTab.show();
        serviceTab.tab.show();
        Ext.getCmp('maintab').setActiveItem(serviceTab);
    },
    onLoginClick : function () {

        this.redirectTo('users');

    },
    onRegisterClick : function () {

       var userRadio = this.lookupReference('userRadio'),
           serviceRadio = this.lookupReference('serviceRadio'),
            url = '';
       url = userRadio.getChecked() ? "users" : "services";
       this.redirectTo(url);
    },
    onRegistration : function () {

        var userTab = this.lookupReference('usertab'),
            serviceTab = this.lookupReference('servicetab'),
            loginTab = this.lookupReference('logintab'),
            registrationTab = this.lookupReference('registrationtab');

        Ext.getCmp('maintab').getInnerItems().forEach(function(element) {
            element.hide();
            element.tab.hide();
        });
        registrationTab.show();
        registrationTab.tab.show();
        loginTab.tab.show();
        Ext.getCmp('maintab').setActiveItem(registrationTab);

    },
    onLogin : function () {

        var userTab = this.lookupReference('usertab'),
            serviceTab = this.lookupReference('servicetab'),
            loginTab = this.lookupReference('logintab'),
            registrationTab = this.lookupReference('registrationtab');

        Ext.getCmp('maintab').getInnerItems().forEach(function(element) {
            element.hide();
            element.tab.hide();
        });
        loginTab.show();
        registrationTab.tab.show();
        loginTab.tab.show();
        Ext.getCmp('maintab').setActiveItem(loginTab);

    }


});