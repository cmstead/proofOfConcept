
var jadeConfig = require('./grunt/jade.json'),
    watchConfig = require('./grunt/watch.json');

module.exports = function(grunt){
  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jade: jadeConfig,
        watch: watchConfig
    });

    /* Load grunt task adapters */

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('build-jade', ['jade', 'watch:jade']);
};