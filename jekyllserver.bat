:start
bash --login -c "bundle exec jekyll serve --safe --force_polling"
choice /t 1 /d y
if ERRORLEVEL 2 exit
if ERRORLEVEL 1 goto :start
