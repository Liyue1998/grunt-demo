module.exports = function (grunt) {
  grunt.initConfig({
    imagemin:{
      
    } 
  });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['imagemin'];

};

