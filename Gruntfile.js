module.exports = function(grunt) {

  // Display the elapsed execution time of Grunt tasks
  require('time-grunt')(grunt);

  // Load Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Browserify command
    browserify: {
      build: {
        options: {
          browserifyOptions: {
            debug: false
          },
          transform: [
            [
              'babelify', {
                // Babel options: https://babeljs.io/docs/usage/api/
                'presets': [
                  [
                    'es2015', {
                      // ES2015 preset options: https://babeljs.io/docs/plugins/preset-es2015/
                      'loose': true
                    }
                  ]
                ],
                'comments': false,
                'compact': false,
                'minified': false
              }
            ]
          ]
        },
        src: [
          'src/js/scripts.js'
        ],
        dest: 'build/js/scripts.js'
      }
    }
  });

  // Build task
  grunt.registerTask('build', [
    'browserify'
  ]);

  // Default task
  grunt.registerTask('default', 'build');

};
