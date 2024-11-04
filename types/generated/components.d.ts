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

export interface BestListBestList extends Schema.Component {
  collectionName: 'components_best_list_best_lists';
  info: {
    displayName: 'best_list';
  };
  attributes: {
    best_list: Attribute.Component<'best-list.list-best', true>;
  };
}

export interface BestListListBest extends Schema.Component {
  collectionName: 'components_best_list_list_bests';
  info: {
    displayName: 'list_best';
    icon: 'brush';
  };
  attributes: {
    information: Attribute.RichText;
  };
}

export interface BlogHeaderImageBlogHeaderImage extends Schema.Component {
  collectionName: 'components_blog_header_image_blog_header_images';
  info: {
    displayName: 'blog_header_image';
    icon: 'bell';
    description: '';
  };
  attributes: {
    blog_header_image: Attribute.Media;
    image_by: Attribute.String;
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
    description: '';
  };
  attributes: {
    description: Attribute.RichText;
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

export interface GroupImagesGroupImages extends Schema.Component {
  collectionName: 'components_group_images_group_images';
  info: {
    displayName: 'group_images';
    icon: 'brush';
  };
  attributes: {
    images: Attribute.Component<'images.images', true>;
  };
}

export interface HeadingHeading extends Schema.Component {
  collectionName: 'components_heading_headings';
  info: {
    displayName: 'heading';
    icon: 'collapse';
  };
  attributes: {
    heading: Attribute.RichText;
  };
}

export interface ImageImage extends Schema.Component {
  collectionName: 'components_image_images';
  info: {
    displayName: 'image';
    icon: 'arrowUp';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ImagesImages extends Schema.Component {
  collectionName: 'components_images_images';
  info: {
    displayName: 'images';
    icon: 'command';
  };
  attributes: {
    image: Attribute.Media;
    image_by: Attribute.String;
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
    heading: Attribute.RichText;
  };
}

export interface MultiImagesMultiImages extends Schema.Component {
  collectionName: 'components_multi_images_multi_images';
  info: {
    displayName: 'multi-images';
    icon: 'book';
  };
  attributes: {
    images: Attribute.Component<'images.images', true>;
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
    description: '';
  };
  attributes: {
    post_header_image: Attribute.Media;
    image_by: Attribute.String;
  };
}

export interface PostHeadingPostHeading extends Schema.Component {
  collectionName: 'components_post_heading_post_headings';
  info: {
    displayName: 'post_heading';
    icon: 'brush';
    description: '';
  };
  attributes: {
    heading: Attribute.RichText;
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

export interface RegionRegion extends Schema.Component {
  collectionName: 'components_region_regions';
  info: {
    displayName: 'region';
    icon: 'folder';
  };
  attributes: {
    region: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.about-us': AboutUsAboutUs;
      'about-us.about': AboutUsAbout;
      'best-list.best-list': BestListBestList;
      'best-list.list-best': BestListListBest;
      'blog-header-image.blog-header-image': BlogHeaderImageBlogHeaderImage;
      'blog-post.blog-post': BlogPostBlogPost;
      'category.category': CategoryCategory;
      'description.blog-description': DescriptionBlogDescription;
      'description.description': DescriptionDescription;
      'description.information': DescriptionInformation;
      'divider.divider': DividerDivider;
      'group-images.group-images': GroupImagesGroupImages;
      'heading.heading': HeadingHeading;
      'image.image': ImageImage;
      'images.images': ImagesImages;
      'information-box.information-box': InformationBoxInformationBox;
      'information.information': InformationInformation;
      'main-blog-heading.main-heading': MainBlogHeadingMainHeading;
      'multi-images.multi-images': MultiImagesMultiImages;
      'post-description.post-description': PostDescriptionPostDescription;
      'post-header-image.post-header-image': PostHeaderImagePostHeaderImage;
      'post-heading.post-heading': PostHeadingPostHeading;
      'published-date.published-date': PublishedDatePublishedDate;
      'quick-overview.quick-overview': QuickOverviewQuickOverview;
      'region.region': RegionRegion;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
