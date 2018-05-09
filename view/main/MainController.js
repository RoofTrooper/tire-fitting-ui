Ext.define('Tf.view.main.MainController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.main',
    listen : {
        controller : {
            '#' : {

                unmatchedroute : 'onRouteChange'
            }
        }
    },
    routes: {
        ':node:' : 'onRouteChange'
    },


    requires : [
    //    'Ext.MessageBox',
  //      'Ext.field.Text'
    ],

    onRouteChange : function(node) {
        var node = window.location.hash.substr(1);
        // var mainTab = Ext.getCmp('maintab');
        // try {
        //     mainTab.removeAll();
        // }
        // catch(ex) {
        //
        // }
        // Ext.Msg.alert(window.location.hash.substr(1));
        // mainTab.add(Ext.create({xtype: window.location.hash.substr(1), title: window.location.hash}));
        Ext.Msg.alert('this works fine',node);
    },

    onUserClick : function () {

        this.redirectTo('userworkspace');

    },
    onServiceClick : function () {
        this.redirectTo('serviceworkspace');
    },
    onRegisterClick : function () {

        var userRadio = this.lookupReference('userRadio'),
            serviceRadio = this.lookupReference('serviceRadio'),
            url = '';
        url = userRadio.getChecked() ? "userworkspace" : "serviceworkspace";
        this.redirectTo(url);
    },

    onLogin : function () {

        this.redirectTo('login');

    },
    onRegistration : function () {
        this.redirectTo('registration');
    }
});