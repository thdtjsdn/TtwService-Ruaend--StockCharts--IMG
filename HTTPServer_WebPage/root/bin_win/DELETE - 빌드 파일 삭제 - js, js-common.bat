call del /s /q ..\js\__list.json
call del /s /q ..\js\__listDir.json
call del /s /q ..\js\__listPackage.json

call del /s /q ..\js-common\__list.json
call del /s /q ..\js-common\__listDir.json
call del /s /q ..\js-common\__listPackage.json

::

cd ..
del /s /q *.query

for /f "usebackq delims=" %%d in (`"dir /ad/b/s | sort /R"`) do rd "%%d"
:for /f "tokens=*" %%d in ('dir /ad/b/s ^| sort /R') do rd "%%d"

cd bin_win