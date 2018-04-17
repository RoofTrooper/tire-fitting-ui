/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'MyApp',
    extend: 'MyApp.Application',
    requires: [
        'MyApp.*'
    ]
  
});
