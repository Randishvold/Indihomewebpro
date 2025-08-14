import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

const config = {
  plugins: [
    autoprefixer(),
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecss({
            content: ['./src/**/*.html', './src/**/*.svelte'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
};

export default config;
