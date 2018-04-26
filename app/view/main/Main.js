Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    controller: 'main',
    requires: [
        'Ext.Button',
        'Ext.field.Text'
    ],

    viewModel: {
        data: {
            userName: '',
            login: '',
            password: ''
        }
    },
    id: 'maintab',
    reference: 'maintab',
    items: [{

        title: 'Login',
        itemId: 'login',
        reference: 'logintab',
        xtype: 'login'
    }, {
        title: 'Registration',
        xtype: 'registration',  // <<== add to main view
        id: 'registration',
        reference: 'registrationtab',


    },{
        title: 'Service Workspace',
        xtype: 'serviceworkspace',
        itemId: 'services',
        reference: 'servicetab',
        hidden: true
    }, {
        title: 'User Workspace',
        xtype: 'userworkspace',
        itemId: 'users',
        reference: 'usertab',
        hidden: true
    }],
     listeners: {
                activeitemchange: function(me, newval, oldval) {

                 this.getController('main').redirectTo(newval.config.xtype);


                }
            }
});