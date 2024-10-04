module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",

      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),

        secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),

        region: env("AWS_S3_REGION"),

        params: {
          Bucket: env("AWS_STORAGE_BUCKET_NAME"),
        },
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3,
    },
  },
  seo: {
    enabled: true,
  },
});
