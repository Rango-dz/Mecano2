module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
    colors: {

        Myello: '#ffc513',
        sky: '#74C1E7',
        skylight: '#FAFDFF',
        light: 'hsl(0, 0%, 96%)',
        dark: 'hsl(0, 0%, 21%)',
        greenlight: 'hsl(171, 100%, 41%)',
        blue: 'hsl(217, 71%, 53%)',
        bluesky: 'hsl(204, 86%, 53%)',
        grass: 'hsl(141, 53%, 53%)',
        yellow: 'hsl(48, 100%, 67%)',
        pinkdanger: 'hsl(348, 100%, 61%)',
        invertblack: 'hsl(0, 0%, 4%)',
        invertwhite: 'hsl(0, 0%, 100%)',
        invertgreydarker: 'hsl(0, 0%, 21%)',
        invertwhiter: 'hsl(0, 0%, 96%)',
        darkbis: 'hsl(0, 0%, 7%)',
        blackter: 'hsl(0, 0%, 14%)',
        greydarker: 'hsl(0, 0%, 21%)',
        greydark: 'hsl(0, 0%, 29%)',
        greylight: 'hsl(0, 0%, 71%)',
        greylighter: 'hsl(0, 0%, 86%)',
        grey2: 'rgba(255, 255, 255, 0) 50%',
        grey1: 'rgba(231, 235, 237, 100) 50%',
        redbutton: '#0079D3',
        redback: '#DAE0E6',

    },
    backgroundImage: theme => ({
      'partypng': "url('../image/service-tab.png')",
      'layer1png': "url('../image/Layer1.png')",
      'layer2png': "url('../image/Layer2.png')",
      'worldpng': "url('../image/world.png')",
      'mappng': "url('../image/map.png')",
      'maskpng': "url('../image/maskgroup.png')",
    }),
    linearGradientColors: theme => theme('colors'),
  },

    aspectRatio: {
        none: 0,
        square: [1, 1],
        "16/9": [16, 9],
        "4/3": [4, 3],
        "21/9": [21, 9]
    },
  },
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("@tailwindcss/ui"),
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-elevation')(['responsive','focus','hover','active','group-hover','focus-within']),
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover']
    }),
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ],
};