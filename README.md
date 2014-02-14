Typesettings
============

Set type in Ems with modular scale, vertical rhythm, and responsive ratio based headlines using Sass. **Why create another type toolkit in Sass?** I couldn't find exactly what I was looking for. I'm using stuff from many different amazing tools while trying to keep it simple.

 * Its only dependency is Sass
 * It uses Ems not REMs or pixels
 * It maintains vertical rhythm with pixel based borders using padding set in Ems
 * It relies more on using Sass functions combined with vanilla CSS rules rather than mixins to style
 * It uses modular scale values to set font-size
 * It provides settings for adjusting headlines based on screen width

## Implementation

To use Typesettings download and `@import` the `_typesettings.scss` partial into your Sass project.

```scss
 @import "path/yourreset";

 // Typesettings settings :)
 $font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
 $font-serif: Georgia, 'Times New Roman', serif;
 $font-mono: 'Lucida Console', Monaco, monospace;
 $text-color: #000;
 $base-vertical-unit: 6px;
 $base-line-multi: 4;
 $base-font-size: 16px;
 $ms-ratio: 1.414;
 $paragraph-indent: true;

 @import "path/typesettings";
 @import "path/yourstyles";
```

## Requirements

Sass, that's it.

## How to use

After Typesettings is implemented into your project default type is taken care of. However I bet you want to use modular scale and vertical rhythm in the rest of your project. Here is an example how to do that:

The Scss:

```scss
// Using Typesettings default settings
// [1] 3 times the baseline grid value for margin-bottom.
// The second argument is the context font-size. In this case it is 1 step down in
// the modular scale.
//
// [2] Using an optional mixin, a 2px border bottom is set with padding bottom
// set to 3 times the baseline grid with 2px subtracted. By subtracting the 2px from
// the padding bottom, vertical rhythm is maintained.
//
// [3] Using an optional mixin, the line-height is set to 3 * baseline grid. Then
// the font-size is passed using our modular scale value.
.your-module {
   margin-bottom: emRhythm(3, $ms-down1); // [1]
   border-color: #000;
   border-style: solid;
   @include rhythmBorderBottom(2px, 3, $ms-down1); // [2]
   @include setType(3, $ms-down1); // [3]
}
```

The outputted CSS:

```css
.your-module {
    margin-bottom: 1.59075em; // 18px
    border-color: #000;
    border-style: solid;
    border-bottom-width: 2px;
    padding-bottom: 1.414em; // 16px
    font-size: 0.70721em;
    line-height: 1.59075; // 18px (Okay, not pixel perfect, 17.9999999999px)
}
```

## Precision

When looking at the computed styles in the inspector you may notice a pixel value like 17.999999px. This happens as a result of converting values from one type of unit to another in the functions. When the user is looking at the site, the whole site will still sit on baseline, just the baseline may differ slightly from one browser to another.

## Thanks and Resources

* [Type-scale.com](http://type-scale.com/)
* [Typeplate](https://github.com/typeplate/typeplate.github.io)
* [Typecsset](https://github.com/csswizardry/typecsset)
* [Compass](https://github.com/chriseppstein/compass)

## License

[The MIT License (MIT)](https://github.com/ianrose/typesettings/blob/master/LICENSE)




[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/ianrose/typesettings/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

