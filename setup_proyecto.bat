@echo off
echo Creando estructura de proyecto para TP1...

:: 1. Crear Carpetas
mkdir css
mkdir js
mkdir img

:: 2. Crear Archivos HTML en la raiz
echo ^<!DOCTYPE html^> > index.html
echo ^<!DOCTYPE html^> > bitacora.html
echo ^<!DOCTYPE html^> > brian.html
echo ^<!DOCTYPE html^> > ricardo.html
echo ^<!DOCTYPE html^> > david.html

:: 3. Crear Archivos de Estilos y Logica
type nul > css\styles.css
type nul > js\main.js
type nul > js\brian.js
type nul > js\ricardo.js
type nul > js\david.js

:: 4. Crear README inicial
echo # TP1 - Grupo 21 > README.md
echo ## Descripcion >> README.md
echo Proyecto de desarrollo frontend para IFTS 29. >> README.md

echo.
echo ¡Estructura creada con exito!
pause