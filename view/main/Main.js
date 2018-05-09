Ext.define('Tf.view.main.Main', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: false,
    controller: 'main',
    id: 'mainWindow',
    requires: [
        'Ext.Button'
    ],

    items: [{
        title: 'Home',
        html: '<h1 class="main-banner">Hello World!</h1>',
        items: [{
            xtype: 'button',
            text: 'Go',
            handler: 'onLogin'
        }]
    }, {
        title: 'Notifications'
    }, {
        title: 'Settings'
     }, {
         xtype: 'registrationWindow'
     }

    ]
});