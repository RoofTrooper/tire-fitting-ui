Ext.define('MyApp.view.login.Login', {
    extend: 'Ext.Panel',
    alias: 'view.login',
    xtype: 'login', // #1
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
        }
    },
    html: '<h1 class="main-banner">Enter your login and password</h1>',
    items: [{
        xtype: 'textfield',
        label: 'Login',
        bind: '{login}'
    },{
        xtype: 'passwordfield',
        label: 'Password',
        bind:  '{password}',
        listeners: {
            action: 'onLoginClick'
        }
    },{
        xtype: 'button',
        handler: 'onUserClick',
        bind: {
            disabled: '{!password||!login}',
            text: 'Login'
        }

    },
        {
            xtype: 'button',
            handler: 'onRegistration',
            text: 'Registration'
        }]
});