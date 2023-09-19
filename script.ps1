# Invoke Web Request
Invoke-WebRequest https://localhost:7281/api/Translators/GetByCode/$args -OutFile  src/assets/i18n/$args.json
Write-Output https://localhost:7281/api/Translators/GetByCode/$args