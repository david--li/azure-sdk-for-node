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
 * Initializes a new instance of the ProcessCollection class.
 * @constructor
 * Collection of Process resources.
 *
 * @member {string} [nextLink] The URL to the next set of resources.
 *
 */
class ProcessCollection extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProcessCollection
   *
   * @returns {object} metadata of ProcessCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProcessCollection',
      type: {
        name: 'Composite',
        className: 'ProcessCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProcessElementType',
                  type: {
                    name: 'Composite',
                    className: 'Process'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProcessCollection;
