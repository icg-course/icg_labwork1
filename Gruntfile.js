module.exports = function(grunt) {
  grunt.initConfig({
    // validation: {
    //   options: {
    //     reset: true
    //   },
    //   files: {
    //     src: ['*.html']
    //   }
    // },
    xml_validator: {
      files: {
        src: ['*.html', '*.htm', '*.xhtml', '*.x3d']
      }
    }
  });

  //grunt.loadNpmTasks('grunt-w3c-html-validation');
  grunt.loadNpmTasks('grunt-xml-validator');

  grunt.registerTask('default', [
    //'validation',
    'xml_validator']
    );
};
