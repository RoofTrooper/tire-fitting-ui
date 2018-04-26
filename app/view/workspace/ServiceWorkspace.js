Ext.define('MyApp.view.workspace.ServiceWorkspace', {
    extend: 'Ext.Panel',
    xtype: 'serviceworkspace', // #1

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
            serviceData: ''
        }
    },
    html: '<h1 class="main-banner">Welcome, Service!</h1>',
    items: [{
        xtype: 'button',
        handler: 'onLogin',
        text: 'Back to Main'
    },{
        xtype: 'button',
        handler: 'onUserClick',
        text: 'Switch to User'
    }]
});
