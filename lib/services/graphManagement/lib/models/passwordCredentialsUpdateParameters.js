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
 * Initializes a new instance of the PasswordCredentialsUpdateParameters class.
 * @constructor
 * Request paramters for PasswordCredentials update operation
 *
 * @member {array} [value] PasswordCredential list.
 * 
 */
function PasswordCredentialsUpdateParameters() {
}

/**
 * Defines the metadata of PasswordCredentialsUpdateParameters
 *
 * @returns {object} metadata of PasswordCredentialsUpdateParameters
 *
 */
PasswordCredentialsUpdateParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PasswordCredentialsUpdateParameters',
    type: {
      name: 'Composite',
      className: 'PasswordCredentialsUpdateParameters',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'PasswordCredentialElementType',
                type: {
                  name: 'Composite',
                  className: 'PasswordCredential'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = PasswordCredentialsUpdateParameters;