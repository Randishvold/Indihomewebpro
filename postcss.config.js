import autoprefixer from 'autoprefixer';
import purgecssPlugin from '@fullhuman/postcss-purgecss';

const config = {
  plugins: [
    autoprefixer(),
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecssPlugin.default({
            content: ['./src/**/*.html', './src/**/*.svelte'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};

export default config;