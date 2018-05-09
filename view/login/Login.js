Ext.define('Tf.view.login.Login', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: false,
    controller: 'main',
    id: 'loginWindow',
    title: 'Login page',
    requires: [
        'Ext.Button',
        'Ext.form.*'
    ],
    xtype: 'loginWindow',
    viewModel: {
        data: {
            login: '',
            password: '',
        }
    },
    items: [{
        xtype: 'textfield',
        label: 'Login',
        bind: '{login}',
        fieldLabel: 'Login'
    },{
        xtype: 'textfield',
        label: 'Password',
        inputType: 'password',
        bind:  '{password}',
        listeners: {
            action: 'onLogin'
        },
        fieldLabel: 'Password'
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