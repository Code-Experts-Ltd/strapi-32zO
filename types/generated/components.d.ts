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

export interface BlogHeaderImageBlogHeaderImage extends Schema.Component {
  collectionName: 'components_blog_header_image_blog_header_images';
  info: {
    displayName: 'blog_header_image';
    icon: 'bell';
  };
  attributes: {
    blog_header_image: Attribute.Media;
  };
}

export interface BlogPostBlogPost extends Schema.Component {
  collectionName: 'components_blog_post_blog_posts';
  info: {
    displayName: 'blogPost';
    icon: 'brush';
  };
  attributes: {
    header_image: Attribute.Media;
    post_title: Attribute.Text;
    description: Attribute.RichText;
    images: Attribute.Media;
  };
}

export interface CategoryCategory extends Schema.Component {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'category';
    icon: 'bulletList';
  };
  attributes: {
    category: Attribute.Enumeration<
      ['Hotels', 'Restaurants', 'Beach Clubs', 'Coffee Shops', 'Bars and Clubs']
    >;
  };
}

export interface DescriptionBlogDescription extends Schema.Component {
  collectionName: 'components_description_blog_descriptions';
  info: {
    displayName: 'blog_description';
    icon: 'crown';
  };
  attributes: {
    description: Attribute.RichText;
  };
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

export interface DividerDivider extends Schema.Component {
  collectionName: 'components_divider_dividers';
  info: {
    displayName: 'divider';
    icon: 'cog';
  };
  attributes: {
    divider: Attribute.Boolean;
  };
}

export interface ImagesImages extends Schema.Component {
  collectionName: 'components_images_images';
  info: {
    displayName: 'images';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface InformationBoxInformationBox extends Schema.Component {
  collectionName: 'components_information_box_information_boxes';
  info: {
    displayName: 'information_box';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    information_box: Attribute.Component<'information.information'>;
  };
}

export interface InformationInformation extends Schema.Component {
  collectionName: 'components_information_information';
  info: {
    displayName: 'information';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    heading: Attribute.RichText;
    description: Attribute.RichText;
  };
}

export interface MainBlogHeadingMainHeading extends Schema.Component {
  collectionName: 'components_main_heading_main_headings';
  info: {
    displayName: 'main_blog_heading';
    icon: 'cup';
    description: '';
  };
  attributes: {
    main_blog_heading: Attribute.RichText;
  };
}

export interface PostDescriptionPostDescription extends Schema.Component {
  collectionName: 'components_post_description_post_descriptions';
  info: {
    displayName: 'post_description';
    icon: 'bold';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface PostHeaderImagePostHeaderImage extends Schema.Component {
  collectionName: 'components_post_header_image_post_header_images';
  info: {
    displayName: 'post_header_image';
    icon: 'bold';
  };
  attributes: {
    post_header_image: Attribute.Media;
  };
}

export interface PostHeadingPostHeading extends Schema.Component {
  collectionName: 'components_post_heading_post_headings';
  info: {
    displayName: 'post_heading';
    icon: 'brush';
  };
  attributes: {
    post_heading: Attribute.RichText;
  };
}

export interface PublishedDatePublishedDate extends Schema.Component {
  collectionName: 'components_published_date_published_dates';
  info: {
    displayName: 'published_date';
    icon: 'brush';
  };
  attributes: {
    published_date: Attribute.Boolean;
  };
}

export interface QuickOverviewQuickOverview extends Schema.Component {
  collectionName: 'components_quick_overview_quick_overviews';
  info: {
    displayName: 'quick_overview';
  };
  attributes: {
    quick_overview: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.about-us': AboutUsAboutUs;
      'about-us.about': AboutUsAbout;
      'blog-header-image.blog-header-image': BlogHeaderImageBlogHeaderImage;
      'blog-post.blog-post': BlogPostBlogPost;
      'category.category': CategoryCategory;
      'description.blog-description': DescriptionBlogDescription;
      'description.description': DescriptionDescription;
      'description.information': DescriptionInformation;
      'divider.divider': DividerDivider;
      'images.images': ImagesImages;
      'information-box.information-box': InformationBoxInformationBox;
      'information.information': InformationInformation;
      'main-blog-heading.main-heading': MainBlogHeadingMainHeading;
      'post-description.post-description': PostDescriptionPostDescription;
      'post-header-image.post-header-image': PostHeaderImagePostHeaderImage;
      'post-heading.post-heading': PostHeadingPostHeading;
      'published-date.published-date': PublishedDatePublishedDate;
      'quick-overview.quick-overview': QuickOverviewQuickOverview;
    }
  }
}
