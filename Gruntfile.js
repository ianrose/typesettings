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
          'test/test.css': 'test/test.scss'
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          'test/*.css'
        ]
      }
    },
    watch: {
        sass: {
          files: ['*.{scss,sass}', 'test/*{scss,sass}'],
          tasks: ['sass']
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
            'test/*.css'
          ]
        }
      }
    });

  // Default task(s).
  grunt.registerTask('default', [
    'sass',
    'csslint',
    'connect:livereload',
    'watch'
  ]);
};
