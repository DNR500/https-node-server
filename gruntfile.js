module.exports = function (grunt)
{
    grunt.initConfig({
        jsonlint: {
            project: {
                src: [ 'package.json', '.eslintrc.json', 'src/**/*.json', 'test/**/*.json' ]
            }
        },
        eslint: {
            src_node:{
                src: ['gruntfile.js', 'src/**/*.js', 'test/node/**/*.js'],
                options: {
                    configFile: '.eslintrc.json'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('gruntify-eslint');

    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['jsonlint', 'eslint']);
};