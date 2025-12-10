export default {
  plugins: {
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-media-queries': true, // включает @custom-media
        'nesting-rules': true         // заодно включает вложенность
      }
    }
  }
};
