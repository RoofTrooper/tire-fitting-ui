Ext.define('MyApp.view.registration.Registration', {
    extend: 'Ext.Panel',
    xtype: 'registration', // #1
    requires: [
        'Ext.grid.Grid',
        'Ext.layout.Fit',
        'Ext.field.Text',
        'Ext.form.*',
    	'Ext.layout.*'
    ],

    layout: 'fit', // #2
    viewModel: {
        data: {
            login: '',
            password: '',
            repeatPassword: '',
            radioUser: true,
            radioService: false
        }
    },
    items: [{
    title: 'Width = 50%',
    columnWidth: .5,
    items: [{
            xtype: 'textfield',
            label: 'Login',
            bind: '{login}'
        },
        {
            xtype: 'textfield',
            label: 'Password',
            bind: '{password}'
        },
        {
            xtype: 'textfield',
            label: 'Repeat Password',
            bind: '{repeatPassword}'
        },{
            xtype      : 'fieldcontainer',
            fieldLabel : 'userType',
            defaultType: 'radiofield',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
                {
                    boxLabel  : 'User',
                    name      : 'userType',
                    inputValue: 'user',
                    id        : 'userType1',
                    checked: 'true',
                    bind: '{radioUser}'
                }, {
                    boxLabel  : 'Service',
                    name      : 'userType',
                    inputValue: 'service',
                    id        : 'userType2'
                }
                
            ]},
            {
            xtype: 'button',
            handler: 'onRegisterClick',
            text: 'Register'
        }]

        
 


},{
    title: 'Width = 50%',
    columnWidth: .5,
    items: [{
            xtype: 'textfield',
            bind: {
            	label: '{radioUser ? "User" : "Service"}'
            }
        },
        {
            xtype: 'textfield',
            label: 'Password',
            bind: {
            	label: '{radioUser ? "User" : "Service"}'
        	}
    	},
        {
            xtype: 'textfield',
            label: 'Repeat Password',
            bind: {
            	label: '{radioUser ? "User" : "Service"}'
            }
        }]
}]
});