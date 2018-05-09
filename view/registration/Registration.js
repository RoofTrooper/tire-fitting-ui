Ext.define('Tf.view.registration.Registration', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: false,
    controller: 'main',
    id: 'registrationWindow',
    title: 'Registration page',
    requires: [
        'Ext.Button',
        'Ext.form.*',

    ],
    xtype: 'registrationWindow',
    viewModel: {
        data: {
            login: '',
            password: '',
            repeatPassword: '',
            radio: ''
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
        fieldLabel: 'Password'
    },{
        xtype: 'textfield',
        label: 'Password',
        inputType: 'password',
        bind:  '{repeatPassword}',
        fieldLabel: 'Repeat password'
    }, {
        xtype: 'button',
        handler: 'onUserClick',
        bind: {
            disabled: '{!password||!login||!repeatPassword||(password!=repeatPassword)}',
            text: 'Register'
        }
    }, {
            xtype      : 'fieldcontainer',
            fieldLabel : 'Size',
            defaultType: 'radiofield',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
                {
                    boxLabel  : 'User',
                    name      : 'user',
                    inputValue: 'u',
                    id        : 'radioUser'
                }, {
                    boxLabel  : 'Service',
                    name      : 'service',
                    inputValue: 's',
                    id        : 'radioService'
                }
            ]
        }]
});