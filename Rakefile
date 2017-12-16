begin
  require 'rubocop/rake_task'
rescue LoadError => e
  warn e
end

task default: %i[rubocop build]

RuboCop::RakeTask.new

desc 'build the thing'
task :build do
  exec 'bundle exec jekyll build'
end

desc 'serve it up'
task :serve do
  ENV['PORT'] ||= '4000'
  exec "bundle exec jekyll serve --port #{ENV['PORT']}"
end
