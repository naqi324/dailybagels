/* @flow */
/**
 * Sms.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    smsDate: {
      type: 'date',
      required: true
    },
    smsURL: {
      type: 'string',
      required: true,
      unique: true
    },
    smsMsg:{
      type: 'string',
      required: true,
      defaultsTo: 'woof'
    }
  }
  
};
