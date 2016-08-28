/* @flow */
/**
 * Friend.js
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
    phoneNum: {
      type: 'integer',
      required: true,
      unique: true
    },
    activated:{
      type: 'boolean',
      defaultsTo: false
    },
    subscribed:{
      type: 'boolean',
      defaultsTo: false
    },
    subscribeDate: {
      type: 'date',
      defaultsTo: null
    }
  }
};
