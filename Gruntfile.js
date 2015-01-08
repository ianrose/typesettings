var LIVERELOAD_PORT = 35729;

var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

// Load the plugins.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');

// Project configuration.
  grunt.initConfig({
    connect: {
      options: {
        port: 9001,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [lrSnippet, mountFolder(connect, 'test')];
          }
        }
      }
    },
    sass: {
      dist: {
        files: {
          'test/scss/styles.css': 'test/scss/styles.scss'
        }
      }
    },
    stylus: {
      compile: {
        files: {
          'test/styl/styles.css': 'test/styl/styles.styl'
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          'test/scss/*.css',
          'test/styl/*.css'
        ]
      }
    },
    watch: {
      sass: {
        files: ['*.{scss,sass}', 'test/scss/*{scss,sass}'],
        tasks: ['sass']
      },
      stylus: {
        files: ['*.styl', 'test/styl/*styl'],
        tasks: ['stylus']
      },
      csslint: {
        files: 'test/*.css',
        tasks: ['csslint']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          'test/*.html',
          'test/scss/*.css',
          'test/styl/*.css'
        ]
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', [
    'sass',
    'stylus',
    'csslint',
    'connect:livereload',
    'watch'
  ]);
  grunt.registerTask('sasstest', [
    'sass',
    'csslint',
    'connect:livereload',
    'watch'
  ]);
  grunt.registerTask('stylustest', [
    'stylus',
    'csslint',
    'connect:livereload',
    'watch'
  ]);
};

