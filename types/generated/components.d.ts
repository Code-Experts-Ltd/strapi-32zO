import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutAnaAboutAna extends Schema.Component {
  collectionName: 'components_about_ana_about_anas';
  info: {
    displayName: 'about-ana';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    youtube: Attribute.Text;
    instagram: Attribute.Text;
    music: Attribute.Text;
    para1: Attribute.Text;
    para2: Attribute.Text;
    profile: Attribute.Media;
  };
}

export interface AboutAnaAboutAngela extends Schema.Component {
  collectionName: 'components_about_ana_about_angelas';
  info: {
    displayName: 'about-angela';
    icon: 'folder';
    description: '';
  };
  attributes: {
    name: Attribute.Text;
    youtube: Attribute.Text;
    instagram: Attribute.Text;
    music: Attribute.Text;
    para1: Attribute.Text;
    para2: Attribute.Text;
    profile: Attribute.Media;
  };
}

export interface AboutAnaInformation extends Schema.Component {
  collectionName: 'components_about_ana_information';
  info: {
    displayName: 'information';
  };
  attributes: {
    Ana: Attribute.Component<'about-ana.about-ana'>;
    Angela: Attribute.Component<'about-ana.about-ana'>;
  };
}

export interface AboutAngelaAboutAngela extends Schema.Component {
  collectionName: 'components_about_angela_about_angelas';
  info: {
    displayName: 'about-angela';
    icon: 'chartCircle';
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
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-ana.about-ana': AboutAnaAboutAna;
      'about-ana.about-angela': AboutAnaAboutAngela;
      'about-ana.information': AboutAnaInformation;
      'about-angela.about-angela': AboutAngelaAboutAngela;
      'description.description': DescriptionDescription;
      'description.information': DescriptionInformation;
    }
  }
}
