#!/bin/sh
cd $(dirname $0)

kill -9 `lsof -i TCP:49781 | awk '/LISTEN/ {print $2}'`

#..\..\TtwPlatform-Binary--Linux-Ubuntu/Binary/NodeJS/exes100 --expose-gc ./HTTPServer_WebPage.js 49781
ulimit -n 2048
exes100 /data/data/com.termux/files/home/Application/TtwService-Ruaend--StockCharts--IMG/HTTPServer_WebPage/HTTPServer_WebPage.js 49781
