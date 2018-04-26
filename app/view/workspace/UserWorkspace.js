Ext.define('MyApp.view.workspace.UserWorkspace', {
    extend: 'Ext.Panel',
    xtype: 'userworkspace', // #1

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
    html: '<h1 class="main-banner">Welcome, User!</h1>',
    items: [{
        xtype: 'button',
        handler: 'onLogin',
        text: 'Back to Main'
    },{
        xtype: 'button',
        handler: 'onServiceClick',
        text: 'Switch to Service'
    }]
});
