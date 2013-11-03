/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
        config: 'config.rb'
        }
      },
    },
    watch: {
      css: {
        files: '_sass/*.scss',
        tasks: ['compass']
      },
      livereload: {
      options: { livereload: true },
      files: ['css/*','*'],
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}