'use strict';

/**
 * prints-heading service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prints-heading.prints-heading');
