@echo off
echo 刘持冰作品目录网站 jekyll开发调试服务快捷配置批处理 by 刘持冰
REM echo 请确保使用管理员身份运行
REM cd /d %~dp0
REM echo 正在备份HOSTS...
REM copy %WINDIR%\System32\drivers\etc\hosts %WINDIR%\System32\drivers\etc\hosts_BACKUP
REM echo 正在配置HOSTS...
REM echo 127.0.0.1 liuchibing.ticp.net>>%WINDIR%\System32\drivers\etc\hosts
:start
echo 正在启动jekyll服务...
bash --login -c "bundle exec jekyll serve --safe --force_polling"
REM choice /t 1 /d y /m "是否重启jekyll"
REM if ERRORLEVEL 2 goto :end
REM if ERRORLEVEL 1 goto :start
:end
REM echo 正在还原HOSTS...
REM move %WINDIR%\System32\drivers\etc\hosts_BACKUP %WINDIR%\System32\drivers\etc\hosts
pause