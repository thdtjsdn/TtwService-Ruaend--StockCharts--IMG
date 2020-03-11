#!/bin/sh
cd $(dirname $0)

kill -9 `lsof -i TCP:49781 | awk '/LISTEN/ {print $2}'`

#..\..\TtwPlatform-Binary--Linux-Ubuntu/Binary/NodeJS/exes100 --expose-gc ./HTTPServer_WebPage.js 49781
exes100 --expose-gc ./HTTPServer_WebPage.js 49781
