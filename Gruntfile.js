module.exports = function (grunt) {
// Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'test/test.css': 'test/test.scss'
        }
      }
    }
  });
  // Load the plugins.
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('test', ['sass']);
};