chcp 65001

::

call "DELETE - 빌드 파일 삭제 - ui_template.bat"

..\..\..\..\TtwPlatform-Binary--Win\Binary\NodeJS\exes100.exe "BUILD - ui_template.js"

call "XCOPY - ui_template.bat"

call "DELETE - 빌드 파일 삭제 - ui_template.bat"

cmd /k
