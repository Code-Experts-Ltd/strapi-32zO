'use strict';

/**
 * every-thing-you-need service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::every-thing-you-need.every-thing-you-need');
