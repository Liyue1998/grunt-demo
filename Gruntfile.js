module.exports=function(grunt){
  grunt.initConfig({
    concat:{

    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default',['concat']);

};
