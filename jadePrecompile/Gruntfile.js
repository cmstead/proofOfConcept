
var jadeConfig = require('./grunt/jade.json');

module.exports = function(grunt){
  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jade: jadeConfig
    });

    /* Load grunt task adapters */

    grunt.loadNpmTasks('grunt-contrib-jade');
};