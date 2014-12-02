module.exports = function (grunt) {
	grunt.initConfig({
		// jekyll: {
		// 	dist: {
		// 		options: {
		// 			config: '_config.yml, _config.build.yml'
		// 		}
		// 	}
		// },
		shell: {
			jekyllBuild: {
				command: 'bundle exec jekyll build --config _config.yml,_config.build.yml'
			}
			// , 
			// jekyllServe: {
			// 	command: 'bundle exec jekyll serve --baseurl ""'
			// }
		},
		connect: {
			server: {
				options: {
					port: 8080,
					base: '_site'
				}
			}
		},
		watch: {
			livereload: {
				files: [
					'_config.yml',
					'index.html',
					'_layouts/**',
					'_posts/**',
					'_includes/**',
				],
				tasks: ['shell:jekyllBuild'],
				options: {
					livereload: true
				},
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('default', ['shell', 'connect', 'watch'])
}