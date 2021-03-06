/*
 * File: ConstructsStore.js
 * Date: Tue Nov 30 2010 23:20:44 GMT-0800 (PST)
 * 
 * This file was generated by Ext Designer version xds-1.0.2.14.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

ConstructsStore = Ext.extend(Ext.data.ArrayStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        ConstructsStore.superclass.constructor.call(this, Ext.apply({
            storeId: 'constructsStore',
            idIndex: 0,
            autoLoad: true,
            data: [
                [
                    0,
                    "Pending",
                    "Pending",
                    "Pending",
                    "Pending"
                ]
            ],
            fields: [
                {
                    name: 'identifier',
                    allowBlank: false,
                    type: 'int'
                },
                {
                    name: 'description',
                    allowBlank: false,
                    type: 'string'
                },
                {
                    name: 'fwdSeq',
                    allowBlank: false,
                    type: 'string'
                },
                {
                    name: 'revSeq',
                    allowBlank: false,
                    type: 'string'
                },
                {
                    name: 'status',
                    type: 'string'
                }
            ]
        }, cfg));
    }
});
new ConstructsStore();