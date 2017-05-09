module.exports = function(grunt) {

	grunt.initConfig({
	    distFolder: 'dist',
	    pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['<%= distFolder %>/vv.js', '<%= distFolder %>/vvstore.js'],
				dest: '<%= distFolder %>/vv.min.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {

				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*.js',
					dest: '<%= distFolder %>'
				}]
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ["uglify", "concat"]);
	grunt.registerTask('min', ["uglify"]);
	grunt.registerTask('merge', ["concat"]);
};
