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
 * Initializes a new instance of the TaskStatistics class.
 * @constructor
 * Resource usage statistics for a task.
 * @member {string} url The URL of the statistics.
 * 
 * @member {date} startTime The start time of the time range covered by the
 * statistics.
 * 
 * @member {date} lastUpdateTime The time at which the statistics were last
 * updated. All statistics are limited to the range between startTime and
 * lastUpdateTime.
 * 
 * @member {moment.duration} userCPUTime The total user mode CPU time (summed
 * across all cores and all compute nodes) consumed by the task.
 * 
 * @member {moment.duration} kernelCPUTime The total kernel mode CPU time
 * (summed across all cores and all compute nodes) consumed by the task.
 * 
 * @member {moment.duration} wallClockTime The total wall clock time of the
 * task.
 * 
 * @member {number} readIOps The total number of disk read operations made by
 * the task.
 * 
 * @member {number} writeIOps The total number of disk write operations made
 * by the task.
 * 
 * @member {number} readIOGiB The total gibibytes read from disk by the task.
 * 
 * @member {number} writeIOGiB The total gibibytes written to disk by the task.
 * 
 * @member {moment.duration} waitTime The total wait time of the task. The
 * wait time for a task is defined as the elapsed time between the creation
 * of the task and the start of task execution. (If the task is retried due
 * to failures, the wait time is the time to the most recent task execution.)
 * 
 */
function TaskStatistics() {
}

/**
 * Defines the metadata of TaskStatistics
 *
 * @returns {object} metadata of TaskStatistics
 *
 */
TaskStatistics.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TaskStatistics',
    type: {
      name: 'Composite',
      className: 'TaskStatistics',
      modelProperties: {
        url: {
          required: true,
          serializedName: 'url',
          type: {
            name: 'String'
          }
        },
        startTime: {
          required: true,
          serializedName: 'startTime',
          type: {
            name: 'DateTime'
          }
        },
        lastUpdateTime: {
          required: true,
          serializedName: 'lastUpdateTime',
          type: {
            name: 'DateTime'
          }
        },
        userCPUTime: {
          required: true,
          serializedName: 'userCPUTime',
          type: {
            name: 'TimeSpan'
          }
        },
        kernelCPUTime: {
          required: true,
          serializedName: 'kernelCPUTime',
          type: {
            name: 'TimeSpan'
          }
        },
        wallClockTime: {
          required: true,
          serializedName: 'wallClockTime',
          type: {
            name: 'TimeSpan'
          }
        },
        readIOps: {
          required: true,
          serializedName: 'readIOps',
          type: {
            name: 'Number'
          }
        },
        writeIOps: {
          required: true,
          serializedName: 'writeIOps',
          type: {
            name: 'Number'
          }
        },
        readIOGiB: {
          required: true,
          serializedName: 'readIOGiB',
          type: {
            name: 'Number'
          }
        },
        writeIOGiB: {
          required: true,
          serializedName: 'writeIOGiB',
          type: {
            name: 'Number'
          }
        },
        waitTime: {
          required: true,
          serializedName: 'waitTime',
          type: {
            name: 'TimeSpan'
          }
        }
      }
    }
  };
};

module.exports = TaskStatistics;