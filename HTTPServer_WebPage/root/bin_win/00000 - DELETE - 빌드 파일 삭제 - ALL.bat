chcp 65001

::

call "DELETE - 빌드 파일 삭제 - less.bat"

call "DELETE - 빌드 파일 삭제 - ui_template.bat"

call "DELETE - 빌드 파일 삭제 - ui.bat"


call "DELETE - 빌드 파일 삭제 - css.bat"

call "DELETE - 빌드 파일 삭제 - js, js-common.bat"

::

cd ..
for /f "usebackq delims=" %%d in (`"dir /ad/b/s | sort /R"`) do rd "%%d"
cd bin_win