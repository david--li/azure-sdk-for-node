/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the StorageAccountListKeysResult class.
 * @constructor
 * The ListKeys operation response.
 * @member {array} [keys] Gets the list of account keys and their properties.
 * 
 */
function StorageAccountListKeysResult() {
}

/**
 * Defines the metadata of StorageAccountListKeysResult
 *
 * @returns {object} metadata of StorageAccountListKeysResult
 *
 */
StorageAccountListKeysResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'StorageAccountListKeysResult',
    type: {
      name: 'Composite',
      className: 'StorageAccountListKeysResult',
      modelProperties: {
        keys: {
          required: false,
          readOnly: true,
          serializedName: 'keys',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StorageAccountKeyElementType',
                type: {
                  name: 'Composite',
                  className: 'StorageAccountKey'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = StorageAccountListKeysResult;