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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the BackendAddressPool class.
 * @constructor
 * Pool of backend IP addresses.
 *
 * @member {array} [backendIPConfigurations] Gets collection of references to
 * IP addresses defined in network interfaces.
 *
 * @member {array} [loadBalancingRules] Gets load balancing rules that use this
 * backend address pool.
 *
 * @member {object} [outboundNatRule] Gets outbound rules that use this backend
 * address pool.
 *
 * @member {string} [outboundNatRule.id] Resource ID.
 *
 * @member {string} [provisioningState] Get provisioning state of the public IP
 * resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
 *
 * @member {string} [name] Gets name of the resource that is unique within a
 * resource group. This name can be used to access the resource.
 *
 * @member {string} [etag] A unique read-only string that changes whenever the
 * resource is updated.
 *
 */
class BackendAddressPool extends models['SubResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BackendAddressPool
   *
   * @returns {object} metadata of BackendAddressPool
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackendAddressPool',
      type: {
        name: 'Composite',
        className: 'BackendAddressPool',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          backendIPConfigurations: {
            required: false,
            readOnly: true,
            serializedName: 'properties.backendIPConfigurations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NetworkInterfaceIPConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'NetworkInterfaceIPConfiguration'
                  }
              }
            }
          },
          loadBalancingRules: {
            required: false,
            readOnly: true,
            serializedName: 'properties.loadBalancingRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SubResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SubResource'
                  }
              }
            }
          },
          outboundNatRule: {
            required: false,
            readOnly: true,
            serializedName: 'properties.outboundNatRule',
            type: {
              name: 'Composite',
              className: 'SubResource'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BackendAddressPool;
