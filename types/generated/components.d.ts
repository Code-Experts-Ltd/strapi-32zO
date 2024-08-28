import type { Schema, Attribute } from '@strapi/strapi';

export interface DescriptionDescription extends Schema.Component {
  collectionName: 'components_description_descriptions';
  info: {
    displayName: 'description';
    icon: 'filePdf';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface DescriptionInformation extends Schema.Component {
  collectionName: 'components_description_information';
  info: {
    displayName: 'information';
    icon: 'bulletList';
  };
  attributes: {
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'description.description': DescriptionDescription;
      'description.information': DescriptionInformation;
    }
  }
}
