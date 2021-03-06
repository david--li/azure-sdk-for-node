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

/**
 * @class
 * Initializes a new instance of the AzureBlobConnectorProperties class.
 * @constructor
 * The Azure Blob connector properties.
 *
 * @member {string} connectionKeyVaultUrl The connection KeyVault URL.
 *
 */
class AzureBlobConnectorProperties {
  constructor() {
  }

  /**
   * Defines the metadata of AzureBlobConnectorProperties
   *
   * @returns {object} metadata of AzureBlobConnectorProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureBlobConnectorProperties',
      type: {
        name: 'Composite',
        className: 'AzureBlobConnectorProperties',
        modelProperties: {
          connectionKeyVaultUrl: {
            required: true,
            serializedName: 'connectionKeyVaultUrl',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureBlobConnectorProperties;
