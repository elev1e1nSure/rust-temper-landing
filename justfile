set shell := ["powershell.exe", "-NoProfile", "-Command"]

default:
    @just --list

dev:
    Start-Process "RustTemper Landing.dc.html"

check:
    $f = "RustTemper Landing.dc.html"; if (-not (Test-Path -LiteralPath $f)) { throw "HTML file missing" }; $c = Get-Content -LiteralPath $f -Raw; if ([string]::IsNullOrWhiteSpace($c)) { throw "HTML file is empty" }
