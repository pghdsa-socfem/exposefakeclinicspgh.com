begin
  require 'html-proofer'
  require 'rubocop/rake_task'
rescue LoadError => e
  warn e
end

task default: %i[rubocop htmlproofer]

RuboCop::RakeTask.new if defined?(RuboCop)

desc 'clean it up'
task :clean do
  rm_rf '_site'
  rm_rf '.sass-cache'
end

desc 'build the thing'
task :build do
  sh 'bundle exec jekyll build'
end

desc 'serve it up'
task :serve do
  ENV['PORT'] ||= '4000'
  exec "bundle exec jekyll serve --port #{ENV['PORT']}"
end

desc 'proof the htmls'
task htmlproofer: :build do
  HTMLProofer.check_directory(
    './_site',
    assume_extension: true,
    allow_hash_href: true,
    check_favicon: true,
    check_html: true,
    url_ignore: [
      %r{^https?://.+exposefakeclinicspgh\.com.+}
    ]
  ).run
end
