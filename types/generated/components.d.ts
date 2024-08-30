import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsAboutUs extends Schema.Component {
  collectionName: 'components_about_us_about_uses';
  info: {
    displayName: 'about-us';
    icon: 'bold';
    description: '';
  };
  attributes: {
    para1: Attribute.Text;
    instagram: Attribute.Text;
    youtube: Attribute.Text;
    music: Attribute.Text;
    profile: Attribute.Media;
    name: Attribute.Text;
    para2: Attribute.Text;
  };
}

export interface AboutUsAbout extends Schema.Component {
  collectionName: 'components_about_us_abouts';
  info: {
    displayName: 'about';
    icon: 'connector';
    description: '';
  };
  attributes: {};
}

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
    description: '';
  };
  attributes: {
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.about-us': AboutUsAboutUs;
      'about-us.about': AboutUsAbout;
      'description.description': DescriptionDescription;
      'description.information': DescriptionInformation;
    }
  }
}
