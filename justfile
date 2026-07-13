set shell := ["powershell.exe", "-NoProfile", "-Command"]

default:
    @just --list

dev:
    Start-Process "RustTemper Landing.dc.html"

check:
    if (-not (Test-Path "RustTemper Landing.dc.html")) { throw "HTML file missing" }
    $content = Get-Content "RustTemper Landing.dc.html" -Raw
    if ([string]::IsNullOrWhiteSpace($content)) { throw "HTML file is empty" }
