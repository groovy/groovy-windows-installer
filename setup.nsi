# We assume the following commandline parameters for the compilation
# DIR_PREFIX       is the full path to the directory containing the different modules
# SOURCE_VERSION   defines the version of the release
# SOURCE_DIR       is the relative path to the groovy install directory
# NATIVE_DIR       is the relative path to the native launcher
# SCRIPTOM_DIR     is the relative path to the scriptom module
# GANT_DIR         is the relative path to the gant module
# GPARS_LIBRARIES  is the relative path to the optional libraries for gpars
# GRIFFON_B        is the relative path to the griffon builders module
# GAELYK_DIR       is the relative path to the Gaelyk module
# SPOCK_DIR        is the relative path to the Spock module
# EASYB_DIR        is the relative path to the easyb module
# GMOCK_DIR        is the relative path to the gmock module
# GROOVYSERV_DIR   is the relative path to the groovyserv module
# VERSION_TXT      is the relative path to the installed_versions.txt
# DOC_DIR          is the relative path to the doc directory
# JAVA_ARCH        is the directory containing the architecture detection jar


!define InstallerVersion 0.7.3

# Set the compression level
SetCompressor /SOLID lzma

# The source of the Groovy installation
!define SOURCEDIR "${DIR_PREFIX}\${SOURCE_DIR}"

# Defines
!define COMPANY ""
!define URL http://groovy-lang.org/
!define ShortName Groovy
!define VERSION ${SOURCE_VERSION}
Name "Groovy-${Version}"
!define REGKEY "SOFTWARE\$(^Name)"
!define SUPPLEMENTARY "Supplementary"

# Version Information for the executable
VIProductVersion "${Version}.0"
VIAddVersionKey "ProductName" "Groovy Installer"
VIAddVersionKey "FileDescription" "This is the Windows Installer for the language Groovy"
VIAddVersionKey "FileVersion" "${Version}.0"
VIAddVersionKey "ProductVersion" "${Version}.0"

# VIAddVersionKey /LANG=${LANG_ENGLISH} "FileVersion" "1.2.3"


# MUI defines
!define MUI_FINISHPAGE_NOAUTOCLOSE
!define MUI_STARTMENUPAGE_REGISTRY_ROOT HKLM
!define MUI_STARTMENUPAGE_REGISTRY_KEY ${REGKEY}
!define MUI_STARTMENUPAGE_REGISTRY_VALUENAME StartMenuGroup
!define MUI_STARTMENUPAGE_DEFAULTFOLDER $(^Name)
!define MUI_FINISHPAGE_SHOWREADME $INSTDIR\${VERSION_TXT}
!define MUI_UNFINISHPAGE_NOAUTOCLOSE
!define MUI_HEADERIMAGE
!define MUI_HEADERIMAGE_BITMAP "header.bmp"
!define MUI_HEADERIMAGE_BITMAP_NOSTRETCH
!define MUI_WELCOMEFINISHPAGE_BITMAP "welcome.bmp"
!define MUI_WELCOMEFINISHPAGE_BITMAP_NOSTRETCH

# Defines for Registry keys
!define REG_GROOVY_BINARIES "Groovy Binaries"
!define REG_GROOVY_DOCUMENTATION "Groovy Documentation"
!define REG_MODIFY_VARIABLES "Modify Variables"
!define REG_GANT "Gant"
!define REG_GRIFFON "Griffon"
!define REG_SCRIPTOM "Scriptom"
!define REG_GAELYK "Gaelyk"
!define REG_SPOCK "Spock"
!define REG_EASYB "easyb"
!define REG_GMOCK "GMock"
!define REG_GROOVYSERV "GroovyServ"


# Included files
!include Sections.nsh
!include MUI.nsh
!include logiclib.nsh
!include WinMessages.NSH
!include FileFunc.nsh
!include  EnvVarUpdate.nsh


# Reserved Files
#ReserveFile "${NSISDIR}\Plugins\AdvSplash.dll"

# User and System Environment
!define NT_current_env 'HKCU "Environment"'
!define NT_all_env     'HKLM "SYSTEM\CurrentControlSet\Control\Session Manager\Environment"'

# Variables
Var StartMenuGroup
Var UserOrSystem
Var JavaArchModel

# Installer pages
!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_LICENSE LICENSE
!insertmacro MUI_PAGE_COMPONENTS
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_STARTMENU Application $StartMenuGroup
!insertmacro MUI_PAGE_INSTFILES
Page custom ReadVariables SetVariables
Page custom ReadFileAssociation SetFileAssociation
!insertmacro MUI_PAGE_FINISH
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES

# Installer languages
!insertmacro MUI_LANGUAGE English
!insertmacro MUI_LANGUAGE German
!insertmacro MUI_LANGUAGE Spanish
!insertmacro MUI_LANGUAGE French
!insertmacro MUI_LANGUAGE PortugueseBR


# Installer attributes
OutFile "groovy-${SOURCE_VERSION}-installer.exe"
InstallDir "$PROGRAMFILES\${ShortName}\$(^Name)"
CRCCheck on
XPStyle on
ShowInstDetails show
InstallDirRegKey HKLM "${REGKEY}" Path
ShowUninstDetails show

LangString NoJava ${LANG_ENGLISH} "Cannot identify Java installation. Assuming 32 bit version."
LangString NoJava ${LANG_GERMAN} "Die Java-Installation kann nicht identifiziert werden. Gehe von einer 32-Bit Installation aus."
LangString NoJava ${LANG_SPANISH} "No se puede identificar a la instalación de Java. Suponiendo versión de 32 bits."
LangString NoJava ${LANG_FRENCH} "Impossible d'identifier la version de Java installée. Version 32 bits supposée."
LangString NoJava ${LANG_PortugueseBR} "Não é possível identificar a instalação do Java. Assumindo versão 32 bits."

# Install Types
InstType "Full"
InstType "Minimal"

# Installer sections
Section "Groovy Binaries" SecBinaries
    SectionIn RO    # this section cannot be deselected
    SetOutPath $INSTDIR
    SetOverwrite on

    File /r "${SOURCEDIR}\*"

    SetOutPath $INSTDIR\${SUPPLEMENTARY}\JavaArch
    File /r "${JAVA_ARCH}\GetArchModel.jar"
    File /r "${JAVA_ARCH}\GetArchDataModel.java"

    # Now execute JRE
    Call GetJRE
    Pop $R0
    # StrCpy $0 '"$R0" -classpath "${CLASSPATH}" ${CLASS}'
    StrCpy $0 '"$R0" -jar "$INSTDIR\${SUPPLEMENTARY}\JavaArch\GetArchModel.jar"'

    ExecWait $0 $JavaArchModel

    ${If} ${Errors}
    ${OrIf} $JavaArchModel == 1
        # We assume a 32-bit installation
        MessageBox MB_OK $(NoJava)
        StrCpy $JavaArchModel 32
    ${EndIf}

    SetOutPath $INSTDIR\bin
    ${if} $JavaArchModel == 32
        File /oname=groovy.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\32bit\groovy.exe"
        File /oname=groovyc.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\32bit\groovy.exe"
        File /oname=groovysh.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\32bit\groovy.exe"
        File /oname=java2groovy.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\32bit\groovy.exe"

        File /oname=groovyw.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\32bit\groovyw.exe"
        File /oname=groovyConsole.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\32bit\groovyw.exe"
    ${else}
        File /oname=groovy.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\64bit\groovy.exe"
        File /oname=groovyc.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\64bit\groovy.exe"
        File /oname=groovysh.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\64bit\groovy.exe"
        File /oname=java2groovy.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\64bit\groovy.exe"

        File /oname=groovyw.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\64bit\groovyw.exe"
        File /oname=groovyConsole.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\64bit\groovyw.exe"
    ${EndIf}

    SetOutPath $INSTDIR
    File /r "${DIR_PREFIX}\${NATIVE_DIR}\*"
    File "${DIR_PREFIX}\${VERSION_TXT}"
    File /r "${DIR_PREFIX}\${GPARS_LIBRARIES}\*"

    WriteRegStr HKLM "${REGKEY}\Components" "${REG_GROOVY_BINARIES}" 1
SectionEnd

Section "Groovy Documentation" SecDocumentation
    SectionIn 1
    SetOutPath $INSTDIR

    SetOverwrite on
    File  /r "${DIR_PREFIX}\${DOC_DIR}\*"
    WriteRegStr HKLM "${REGKEY}\Components" "${REG_GROOVY_DOCUMENTATION}" 1
SectionEnd

Section "Modify Variables" SecVariables
    SectionIn 1 2
    SetOutPath $INSTDIR
    SetOverwrite on
    WriteRegStr HKLM "${REGKEY}\Components" "${REG_MODIFY_VARIABLES}" 1
SectionEnd

SectionGroup /e Modules SecGrpModules

    Section Easyb SecEasyb
        SectionIn 1
        SetOutPath "$INSTDIR"
        SetOverwrite on
        File /r "${DIR_PREFIX}\${EASYB_DIR}\*"
        WriteRegStr HKLM "${REGKEY}\Components" "${REG_EASYB}" 1
    SectionEnd

    Section Gaelyk SecGaelyk
        SectionIn 1
        SetOutPath $INSTDIR\${SUPPLEMENTARY}\Gaelyk
        SetOverwrite on
        File /r "${DIR_PREFIX}\${GAELYK_DIR}\*"
        WriteRegStr HKLM "${REGKEY}\Components" "${REG_GAELYK}" 1
    SectionEnd

    Section Gant SecGant
        SectionIn 1
        SetOutPath $INSTDIR
        SetOverwrite on
        File /r "${DIR_PREFIX}\${GANT_DIR}\*"

        SetOutPath $INSTDIR\bin
        ${if} $JavaArchModel == 32
            File /oname=gant.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\32bit\groovy.exe"
            File /oname=gantw.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\32bit\groovyw.exe"
        ${else}
            File /oname=gant.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\64bit\groovy.exe"
            File /oname=gantw.exe "${DIR_PREFIX}\${NATIVE_DIR}\${SUPPLEMENTARY}\native\64bit\groovyw.exe"
        ${EndIf}

        WriteRegStr HKLM "${REGKEY}\Components" "${REG_GANT}" 1
    SectionEnd

    Section GMock SecGMock
        SectionIn 1
        SetOutPath "$INSTDIR"
        SetOverwrite on
        File /r "${DIR_PREFIX}\${GMOCK_DIR}\*"
        WriteRegStr HKLM "${REGKEY}\Components" "${REG_GMOCK}" 1
    SectionEnd

    Section GroovyServ SecGroovyServ
        SectionIn 1
        SetOutPath "$INSTDIR"
        SetOverwrite on
        File /r "${DIR_PREFIX}\${GROOVYSERV_DIR}\*"
        WriteRegStr HKLM "${REGKEY}\Components" "${REG_GROOVYSERV}" 1
    SectionEnd

    Section Griffon SecGriffon
        SectionIn 1
        SetOutPath $INSTDIR
        SetOverwrite on
        File /r "${DIR_PREFIX}\${GRIFFON_B}\*"
        WriteRegStr HKLM "${REGKEY}\Components" "${REG_GRIFFON}" 1
    SectionEnd

    Section Scriptom SecScriptom
        SectionIn 1
        SetOutPath $INSTDIR
        SetOverwrite on
        File /r "${DIR_PREFIX}\${SCRIPTOM_DIR}\*"
        WriteRegStr HKLM "${REGKEY}\Components" "${REG_SCRIPTOM}" 1
    SectionEnd

    Section Spock SecSpock
        SectionIn 1
        SetOutPath "$INSTDIR"
        SetOverwrite on
        File /r "${DIR_PREFIX}\${SPOCK_DIR}\*"
        WriteRegStr HKLM "${REGKEY}\Components" "${REG_SPOCK}" 1
    SectionEnd

SectionGroupEnd

# Links in Start Menu

LangString ^UninstallLink ${LANG_ENGLISH} "Uninstall $(^Name)"
LangString ^UninstallLink ${LANG_GERMAN} "Deinstalliere $(^Name)"
LangString ^UninstallLink ${LANG_SPANISH} "Uninstall $(^Name)"
LangString ^UninstallLink ${LANG_FRENCH} "Uninstall $(^Name)"
LangString ^UninstallLink ${LANG_PortugueseBR} "Desinstalar $(^Name)"

LangString ^HTMLLink ${LANG_ENGLISH} "GDK Documentation"
LangString ^HTMLLink ${LANG_GERMAN} "GDK-Dokumentation"
LangString ^HTMLLink ${LANG_SPANISH} "Documentación del GDK"
LangString ^HTMLLink ${LANG_FRENCH} "Documentation du GDK"
LangString ^HTMLLink ${LANG_PortugueseBR} "Documentação do GDK"

LangString ^APILink ${LANG_ENGLISH} "API Documentation"
LangString ^APILink ${LANG_GERMAN} "API-Dokumentation"
LangString ^APILink ${LANG_SPANISH} "Documentación del API"
LangString ^APILink ${LANG_FRENCH} "Documentation de l'API"
LangString ^APILink ${LANG_PortugueseBR} "Documentação da API"

LangString ^GAPILink ${LANG_ENGLISH} "GAPI Documentation"
LangString ^GAPILink ${LANG_GERMAN} "GAPI-Dokumentation"
LangString ^GAPILink ${LANG_SPANISH} "Documentación del GAPI"
LangString ^GAPILink ${LANG_FRENCH} "Documentation de la GAPI"
LangString ^GAPILink ${LANG_PortugueseBR} "Documentação da GAPI"

LangString ^GroovyConsoleLink ${LANG_ENGLISH} "Start GroovyConsole"
LangString ^GroovyConsoleLink ${LANG_GERMAN} "Starte GroovyConsole"
LangString ^GroovyConsoleLink ${LANG_SPANISH} "Start GroovyConsole"
LangString ^GroovyConsoleLink ${LANG_FRENCH} "Start GroovyConsole"
LangString ^GroovyConsoleLink ${LANG_PortugueseBR} "Iniciar GroovyConsole"

Section "-Shortcuts" SecShortcuts

    !insertmacro MUI_STARTMENU_WRITE_BEGIN Application
    SetOutPath $SMPROGRAMS\$StartMenuGroup

    SectionGetFlags ${SecDocumentation} $R0
    IntOp $R0 $R0 & ${SF_SELECTED}

    ${If} $R0 == ${SF_SELECTED}
        CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^HTMLLink).lnk" $INSTDIR\html\groovy-jdk\index.html
        CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^APILink).lnk" $INSTDIR\html\api\index.html
        CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^GAPILink).lnk" $INSTDIR\html\gapi\index.html
    ${EndIf}

    CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^GroovyConsoleLink).lnk" $INSTDIR\bin\GroovyConsole.exe

    !insertmacro MUI_STARTMENU_WRITE_END
    WriteRegStr HKLM "${REGKEY}\Components" Shortcuts 1
SectionEnd

# Section Descriptions
LangString DESC_SecBinaries ${LANG_ENGLISH} "Main Groovy Binaries (includes native launcher)"
LangString DESC_SecBinaries ${LANG_GERMAN} "Groovy Basisinstallation (beinhaltet den nativelauncher)"
LangString DESC_SecBinaries ${LANG_SPANISH} "Ficheros principales de Groovy"
LangString DESC_SecBinaries ${LANG_FRENCH} "Binaires principaux de Groovy"
LangString DESC_SecBinaries ${LANG_PortugueseBR} "Main Groovy Binaries"

LangString DESC_SecDocumentation ${LANG_ENGLISH} "Groovy Documentation"
LangString DESC_SecDocumentation ${LANG_GERMAN}  "Groovy-Dokumentation"
LangString DESC_SecDocumentation ${LANG_SPANISH} "Documentación de Groovy"
LangString DESC_SecDocumentation ${LANG_FRENCH}  "Documentation de Groovy"
LangString DESC_SecDocumentation ${LANG_PortugueseBR}  "Groovy Documentation"

LangString DESC_SecVariables ${LANG_ENGLISH} "Environment Variables and File Association"
LangString DESC_SecVariables ${LANG_GERMAN} "Umgebungsvariablen und Dateiassoziationen"
LangString DESC_SecVariables ${LANG_SPANISH} "Variables de Entorno y Asociación de Ficheros"
LangString DESC_SecVariables ${LANG_FRENCH} "Variables d'environnement et association de fichiers"
LangString DESC_SecVariables ${LANG_PortugueseBR} "Environment Variables and File Association"

LangString DESC_SecGrpModules ${LANG_ENGLISH} "Additional Modules are not strictly necessary, \
but we recommend installing them anyway."
LangString DESC_SecGrpModules ${LANG_GERMAN} "Zusätzliche Module sind nicht unbedingt notwendig, \
wir empfehlen aber, sie trotzdem zu installieren."
LangString DESC_SecGrpModules ${LANG_SPANISH} "Los Módulos Adicionales no son estrictamente \
necesarios, pero recomendamos que se instalen de todas formas."
LangString DESC_SecGrpModules ${LANG_FRENCH}  "Les Modules aditionnels sont optionnels, \
nous vous recommendons cependant de les installer"
LangString DESC_SecGrpModules ${LANG_PortugueseBR}  "Módulos adicionais não são estritamente necessários, \
mesmo assim recomendamos que sejam instalados."

LangString DESC_SecGant ${LANG_ENGLISH} "Gant - a build tool for scripting Ant tasks \
with Groovy"
LangString DESC_SecGant ${LANG_GERMAN}  "Gant - Ein Werkzeug, um Ant Tasks mit Groovy \
zu programmieren"
LangString DESC_SecGant ${LANG_SPANISH} "Gant - una herramienta que facilita el \
'scripting' the tareas de Ant con Groovy"
LangString DESC_SecGant ${LANG_FRENCH}  "Gant - Outil de build permettant de manipuler \
les tâches Ant avec Groovy"
LangString DESC_SecGant ${LANG_PortugueseBR}  "Gant - uma ferramenta de build para criar tarefas do Ant \
com scripts Groovy"

LangString DESC_SecGriffon ${LANG_ENGLISH} "Griffon Builders"
LangString DESC_SecGriffon ${LANG_GERMAN} "Griffon Builders"
LangString DESC_SecGriffon ${LANG_SPANISH} "Builders de Griffon"
LangString DESC_SecGriffon ${LANG_FRENCH} "Builders Griffon"
LangString DESC_SecGriffon ${LANG_PortugueseBR} "Griffon Builders"

LangString DESC_SecScriptom ${LANG_ENGLISH} "Scriptom - script ActiveX or COM components \
with Groovy"
LangString DESC_SecScriptom ${LANG_GERMAN}  "Scriptom - Programmieren von ActiveX und COM-\
Komponenten mit Groovy"
LangString DESC_SecScriptom ${LANG_SPANISH} "Scriptom - permite acceder y configurar \
components ActiveX y/o COM con Groovy"
LangString DESC_SecScriptom ${LANG_FRENCH}  "Scriptom - Manipulation d'ActiveX ou composants \
COM avec Groovy"
LangString DESC_SecScriptom ${LANG_PortugueseBR}  "Scriptom - acesse componentes ActiveX ou COM \
com Groovy"

LangString DESC_SecGaelyk ${LANG_ENGLISH} "Gaelyk - Develop with Google App Engine"
LangString DESC_SecGaelyk ${LANG_GERMAN} "Gaelyk - Entwickeln mit Google App Engine"
LangString DESC_SecGaelyk ${LANG_SPANISH} "Gaelyk - Desarrollo con Google App Engine"
LangString DESC_SecGaelyk ${LANG_FRENCH} "Gaelyk - Developpez avec Google app Engine"
LangString DESC_SecGaelyk ${LANG_PortugueseBR}  "Gaelyk - Desenvolva para o Google App Engine"

LangString DESC_SecSpock ${LANG_ENGLISH} "Spock - The Testing and Specification Framework"
LangString DESC_SecSpock ${LANG_GERMAN} "Spock - Das Test- und Spezifikations-Frame- work"
LangString DESC_SecSpock ${LANG_SPANISH} "Spock - Herramienta de Pruebas y Especificaciones"
LangString DESC_SecSpock ${LANG_FRENCH} "Le framework de tests et de spécifications"
LangString DESC_SecSpock ${LANG_PortugueseBR} "Spock - Framework de Testes e Especificações"

LangString DESC_SecEasyb ${LANG_ENGLISH} "easyb - BDD with Groovy"
LangString DESC_SecEasyb ${LANG_GERMAN} "easyb - BDD mit Groovy"
LangString DESC_SecEasyb ${LANG_SPANISH} "easyb - BDD con Groovy"
LangString DESC_SecEasyb ${LANG_FRENCH} "easyb - BDD avec Groovy"
LangString DESC_SecEasyb ${LANG_PortugueseBR} "easyb - BDD para Groovy"

LangString DESC_SecGMock ${LANG_ENGLISH} "GMock - Mocking Framework for Groovy"
LangString DESC_SecGMock ${LANG_GERMAN} "GMock - Mocking Framework für Groovy"
LangString DESC_SecGMock ${LANG_SPANISH} "GMock - Burlándose de Marco para Groovy"
LangString DESC_SecGMock ${LANG_FRENCH} "GMock - Mocking Framework pour Groovy"
LangString DESC_SecGMock ${LANG_PortugueseBR} "GMock - Construa Mocks utilizando Groovy"

LangString DESC_SecGroovyServ ${LANG_ENGLISH} "GroovyServ - A Server for Executing Groovy Programs"
LangString DESC_SecGroovyServ ${LANG_GERMAN} "GroovyServ - Ein Server für die Ausführung von Groovy-Programmen"
LangString DESC_SecGroovyServ ${LANG_SPANISH} "GroovyServ - Un Servidor para la Ejecución de Programas de Groovy"
LangString DESC_SecGroovyServ ${LANG_FRENCH} "GroovyServ - Un serveur pour exécuter des programmes Groovy"
LangString DESC_SecGroovyServ ${LANG_PortugueseBR}  "GroovyServ - Servidor para execução de programas Groovy"


!insertmacro MUI_FUNCTION_DESCRIPTION_BEGIN
  !insertmacro MUI_DESCRIPTION_TEXT ${SecBinaries} $(DESC_SecBinaries)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecDocumentation} $(DESC_SecDocumentation)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecVariables} $(DESC_SecVariables)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecGrpModules} $(DESC_SecGrpModules)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecGant} $(DESC_SecGant)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecGriffon} $(DESC_SecGriffon)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecScriptom} $(DESC_SecScriptom)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecGaelyk} $(DESC_SecGaelyk)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecSpock} $(DESC_SecSpock)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecEasyb} $(DESC_SecEasyb)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecGMock} $(DESC_SecGMock)
  !insertmacro MUI_DESCRIPTION_TEXT ${SecGroovyServ} $(DESC_SecGroovyServ)
!insertmacro MUI_FUNCTION_DESCRIPTION_END

Section -post SEC0006
    WriteRegStr HKLM "${REGKEY}" Path $INSTDIR
    SetOutPath $INSTDIR
    WriteUninstaller $INSTDIR\uninstall.exe
    !insertmacro MUI_STARTMENU_WRITE_BEGIN Application
    SetOutPath $SMPROGRAMS\$StartMenuGroup
    CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^UninstallLink).lnk" $INSTDIR\uninstall.exe
    !insertmacro MUI_STARTMENU_WRITE_END
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" DisplayName "$(^Name)"
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" DisplayVersion "${Version}.0"
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" Publisher "The Groovy Project"
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" InstallLocation $INSTDIR
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" URLInfoAbout "${URL}"
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" HelpLink "${URL}"
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" URLUpdateInfo "${URL}"
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" Contact "users@groovy.incubator.apache.org"
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" DisplayIcon $INSTDIR\uninstall.exe
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" UninstallString $INSTDIR\uninstall.exe
    Call GetInstalledSize
    Pop $0
    WriteRegDWORD HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" EstimatedSize $0
    WriteRegDWORD HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" NoModify 1
    WriteRegDWORD HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" NoRepair 1
SectionEnd

# Macro for selecting uninstaller sections
!macro SELECT_UNSECTION SECTION_NAME UNSECTION_ID
    Push $R0
    ReadRegStr $R0 HKLM "${REGKEY}\Components" "${SECTION_NAME}"
    StrCmp $R0 1 0 next${UNSECTION_ID}
    !insertmacro SelectSection "${UNSECTION_ID}"
    GoTo done${UNSECTION_ID}
next${UNSECTION_ID}:
    !insertmacro UnselectSection "${UNSECTION_ID}"
done${UNSECTION_ID}:
    Pop $R0
!macroend

Section /o un.Shortcuts UNSEC0998
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^GroovyConsoleLink).lnk"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^HTMLLink).lnk"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^APILink).lnk"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^GAPILink).lnk"
    DeleteRegValue HKLM "${REGKEY}\Components" "Shortcuts"
SectionEnd

# Uninstaller sections
Section /o un.GroovyServ UNSEC0010
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_GROOVYSERV}"
SectionEnd

Section /o un.GMock UNSEC0009
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_GMOCK}"
SectionEnd

Section /o un.Easyb UNSEC0008
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_EASYB}"
SectionEnd

Section /o un.Spock UNSEC0007
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_SPOCK}"
SectionEnd

Section /o un.Gaelyk UNSEC0006
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_GAELYK}"
SectionEnd

Section /o un.Scriptom UNSEC0005
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_SCRIPTOM}"
SectionEnd

Section /o un.Griffon UNSEC0004
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_GRIFFON}"
SectionEnd

Section /o un.Gant UNSEC0003
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_GANT}"
SectionEnd

Section /o "un.Modify Variables" UNSEC0002
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_MODIFY_VARIABLES}"
SectionEnd

Section /o "un.Groovy Documentation" UNSEC0001
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_GROOVY_DOCUMENTATION}"
SectionEnd

Section /o "un.Groovy Binaries" UNSEC0000
    Delete /REBOOTOK $INSTDIR\${VERSION_TXT}
    RmDir /r /REBOOTOK $INSTDIR
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_GROOVY_BINARIES}"
SectionEnd

Section un.post UNSEC0999
    DeleteRegKey HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^UninstallLink).lnk"
    Delete /REBOOTOK $INSTDIR\uninstall.exe
    DeleteRegValue HKLM "${REGKEY}" StartMenuGroup
    DeleteRegValue HKLM "${REGKEY}" Path
    DeleteRegKey /IfEmpty HKLM "${REGKEY}\Components"
    DeleteRegKey /IfEmpty HKLM "${REGKEY}"
    RmDir /REBOOTOK $SMPROGRAMS\$StartMenuGroup
    RmDir /REBOOTOK $INSTDIR
    Push $R0
    StrCpy $R0 $StartMenuGroup 1
    StrCmp $R0 ">" no_smgroup
no_smgroup:
    Pop $R0
SectionEnd

# Installer functions
Function .onInit
    InitPluginsDir
    !insertmacro MUI_LANGDLL_DISPLAY
    File /oname=$PLUGINSDIR\variables.ini variables.ini
    File /oname=$PLUGINSDIR\fileassociation.ini fileassociation.ini

FunctionEnd


# Uninstaller functions
Function un.onInit
    ReadRegStr $INSTDIR HKLM "${REGKEY}" Path
    !insertmacro MUI_STARTMENU_GETFOLDER Application $StartMenuGroup
    !insertmacro SELECT_UNSECTION "Groovy Binaries" ${UNSEC0000}
    !insertmacro SELECT_UNSECTION "Groovy Documentation" ${UNSEC0001}
    !insertmacro SELECT_UNSECTION "Modify Variables" ${UNSEC0002}
    !insertmacro SELECT_UNSECTION Gant ${UNSEC0003}
    !insertmacro SELECT_UNSECTION Griffon ${UNSEC0004}
    !insertmacro SELECT_UNSECTION Scriptom ${UNSEC0005}
    !insertmacro SELECT_UNSECTION Gaelyk ${UNSEC0006}
    !insertmacro SELECT_UNSECTION Spock ${UNSEC0007}
    !insertmacro SELECT_UNSECTION Easyb ${UNSEC0008}
    !insertmacro SELECT_UNSECTION GMock ${UNSEC0009}
    !insertmacro SELECT_UNSECTION GroovyServ ${UNSEC0010}
    !insertmacro SELECT_UNSECTION Shortcuts ${UNSEC0998}
FunctionEnd


#################################################################################################

### Environment

#################################################################################################

# VField 01
LangString VField01 ${LANG_ENGLISH} "Create GROOVY_HOME"
LangString VField01 ${LANG_GERMAN}  "Erzeuge GROOVY_HOME"
LangString VField01 ${LANG_SPANISH} "Crear GROOVY_HOME"
LangString VField01 ${LANG_FRENCH}  "Créer GROOVY_HOME"
LangString VField01 ${LANG_PortugueseBR}  "Criar GROOVY_HOME"

# VField 02
LangString VField02 ${LANG_ENGLISH} "Add to Path"
LangString VField02 ${LANG_GERMAN}  "Zum Pfad hinzufügen"
LangString VField02 ${LANG_SPANISH} "Agregar a la Ruta"
LangString VField02 ${LANG_FRENCH}  "Ajouter au chemin d'accès/au Path"
LangString VField02 ${LANG_PortugueseBR}  "Adicionar ao Path"

# VField 5
LangString VField05 ${LANG_ENGLISH} "If a reference to groovy is detected in the path, \
the checkbox for adding GROOVY_HOME to the path is unchecked. \
If you know better, please set the checkbox to checked.\r\n\r\n\
NB: The uninstaller won't restore old values (yet)."
LangString VField05 ${LANG_GERMAN} "Wenn eine Referenz zu groovy im Pfad entdeckt wird, \
wird die Checkbox für das Hinzufügen von GROOVY_HOME ausgeschaltet.\
Wenn Sie GROOVY_HOME trotzdem zum Pfad hinzufügen möchten, wählen Sie sie wieder an.\r\n\r\n\
Achtung: Der Uninstaller merkt sich keine alten Werte (noch nicht)."
LangString VField05 ${LANG_SPANISH} "Si alguna referencia a Groovy es detectada en la ruta, \
el botón para agregar GROOVY_HOME a la ruta aparecerá deseleccionado. \
Puede dejar el botón seleccionado si lo desea.\r\n\r\n\
NB: El proceso de desinstalación no restaurará valores anteriores."
LangString VField05 ${LANG_FRENCH} "Si une référence vers groovy \
est détectée dans le chemin d'accès, \
la boite  à cocher d'ajout de GROOVY_HOME au chemin d'accès est décochée. \
Si vous êtes expert, cochez ici svp.\r\n\r\n\
NB: Le désinstalleur ne restaurera pas les anciennes valeurs (pas pour le moment)."
LangString VField05 ${LANG_PortugueseBR} "Se uma referência ao Groovy foi detectada, \
o checkbox para adicionar o GROOVY_HOME ao Path estará desmarcada. \
Se você preferir, por favor marque esse checkbox.\r\n\r\n\
NB: O desinstalador não irá restaurar os antigos valores (por enquanto)."

# VField 6
LangString VField06 ${LANG_ENGLISH} "User Environment or\r\nSystem Environment"
LangString VField06 ${LANG_GERMAN}  "Benutzerumgebung oder\r\nSystemumgebung"
LangString VField06 ${LANG_SPANISH} "Entorno de Usuario o\r\nEntorno de Sistema"
LangString VField06 ${LANG_FRENCH}  "Environnement utilisateur ou\r\nenvironnement système"
LangString VField06 ${LANG_PortugueseBR}  "Apenas para esse usuário\r\nPara todos os usuários"


# VField 7
LangString VField07 ${LANG_ENGLISH} "Add to System Environment"
LangString VField07 ${LANG_GERMAN}  "Systemumgebung wählen"
LangString VField07 ${LANG_SPANISH} "Agregar a Entorno de Sistema"
LangString VField07 ${LANG_FRENCH}  "Ajouter à l'environnement système"
LangString VField07 ${LANG_PortugueseBR}  "Adicionar às variáveis do sistema"

# VField 8
LangString VField08 ${LANG_ENGLISH} "Path to Groovy Home"
LangString VField08 ${LANG_GERMAN}  "Pfad zu Groovy Home"
LangString VField08 ${LANG_SPANISH} "Ruta a Groovy Home"
LangString VField08 ${LANG_FRENCH}  "Chemins d'accès au répertoire standard Groovy"
LangString VField08 ${LANG_PortugueseBR}  "Caminho para o diretório raiz do Groovy"

# VField 9
LangString VField09 ${LANG_ENGLISH} "Path Extension"
LangString VField09 ${LANG_GERMAN}  "Erweiterung des Pfades"
LangString VField09 ${LANG_SPANISH} "Extensión de Rutas"
LangString VField09 ${LANG_FRENCH}  "Extension du chemin d'accès"
LangString VField09 ${LANG_PortugueseBR}  "Extensão do Path"

# EnvironmentTitle
LangString EnvironmentTitle ${LANG_ENGLISH} "Environment ..."
LangString EnvironmentTitle ${LANG_GERMAN}  "Umgebung ..."
LangString EnvironmentTitle ${LANG_SPANISH} "Entorno ..."
LangString EnvironmentTitle ${LANG_FRENCH}  "Environnement ..."
LangString EnvironmentTitle ${LANG_PortugueseBR}  "Variáveis ..."

# JavaHomeWarning
LangString JavaHomeWarning ${LANG_ENGLISH} "JAVA_HOME is not set. Please set it \
to your Java installation, otherwise Groovy won't be able to work."
LangString JavaHomeWarning ${LANG_GERMAN}  "JAVA_HOME ist nicht gesetzt. \
Bitte setzen Sie die Umgebungsvariable, ansonsten kann Groovy nicht funktionieren."
LangString JavaHomeWarning ${LANG_SPANISH} "JAVA_HOME no está definido. Por favor defina la ruta \
hacia la instalación de Java, de lo contrario Groovy no podrá funcionar correctamente."
LangString JavaHomeWarning ${LANG_FRENCH}  "JAVA_HOME n'est pas positionné sur le répertoire \
d'installation Java. Dans le cas contraire groovy ne fonctionnera pas."
LangString JavaHomeWarning ${LANG_PortugueseBR}  "JAVA_HOME não está configurada. Por favor, configure \
para o diretório de instalação do Java, caso contrário o Groovy não funcionará."


#Additional Page for setting GROOVY_HOME and system path
Function ReadVariables

  SectionGetFlags ${SecVariables} $R0
  IntOp $R0 $R0 & ${SF_SELECTED}
  IntCmp $R0 ${SF_SELECTED} show

  Abort

  show:

  Push $R0

  # Localization
  WriteINIStr $PLUGINSDIR\variables.ini "Field 1"  "Text" $(VField01)
  WriteINIStr $PLUGINSDIR\variables.ini "Field 2"  "Text" $(VField02)
  WriteINIStr $PLUGINSDIR\variables.ini "Field 5"  "Text" $(VField05)
  WriteINIStr $PLUGINSDIR\variables.ini "Field 6"  "Text" $(VField06)
  WriteINIStr $PLUGINSDIR\variables.ini "Field 7"  "Text" $(VField07)
  WriteINIStr $PLUGINSDIR\variables.ini "Field 8"  "Text" $(VField08)
  WriteINIStr $PLUGINSDIR\variables.ini "Field 9"  "Text" $(VField09)

  # Set value for GROOVY_HOME textfield
  WriteINIStr $PLUGINSDIR\variables.ini "Field 3" "state" $INSTDIR

  # Check for groovy in path
  ReadEnvStr $R0 PATH
  Push $R0
  Push "roovy"
  Call StrStr
  Pop $R0


  # set GROOVY_HOME checkbox to unchecked if groovy is in path
  ${If} $R0 != ''
    WriteINIStr $PLUGINSDIR\variables.ini "Field 2" "state" "0"
  ${EndIf}

  #InstallOptions::dialog $PLUGINSDIR\variables.ini
  ;If not using Modern UI use InstallOptions::dialog "iofile.ini"
  !insertmacro MUI_HEADER_TEXT "$(EnvironmentTitle)" ""
  !insertmacro MUI_INSTALLOPTIONS_DISPLAY "variables.ini"

  Pop $R0
FunctionEnd

Function SetVariables
  Push $R0

  # default is current
  StrCpy $UserOrSystem "current"
  # If set, then the system environment is used
  ReadINIStr $R0 "$PLUGINSDIR\variables.ini" "Field 7" "State"
  ${If} $R0 == '1'
    StrCpy $UserOrSystem "all"
  ${Else}
    StrCpy $UserOrSystem "current"
  ${EndIf}

  # Set GROOVY_HOME if the user checked the resp. checkbox
  ReadINIStr $R0 "$PLUGINSDIR\variables.ini" "Field 1" "State"
  ${If} $R0 == '1'
    ReadINIStr $R0 "$PLUGINSDIR\variables.ini" "Field 3" "State"
    GetFullPathName /SHORT $0 $R0
    Push "GROOVY_HOME"
    Push $0
    Call WriteEnvStr
  ${EndIf}

  # Set PATH if the user checked the resp. checkbox
  ReadINIStr $R0 "$PLUGINSDIR\variables.ini" "Field 2" "State"
  ${If} $R0 == '1'

    # Variable PATH and Mode Append
    Push "PATH"
    Push "A"

    # "HKLM" = the "all users" section of the registry
    # "HKCU" = the "current user" section
    StrCmp $UserOrSystem "current" NT_current
       Push "HKLM"
       Goto NT_resume
    NT_current:
       Push "HKCU"
    NT_resume:

    ReadINIStr $R0 "$PLUGINSDIR\variables.ini" "Field 4" "State"
    Push $R0
    Call EnvVarUpdate
    Pop  $0

  ${EndIf}

  # Finally, check for JAVA_HOME existence
  ReadEnvStr $R0 JAVA_HOME
  ${If} $R0 == ""
    MessageBox MB_ICONEXCLAMATION|MB_OK $(JavaHomeWarning)
  ${EndIf}

  Pop $R0

FunctionEnd

#################################################################################################

### File Associations

#################################################################################################

# FAField 01
LangString FAField01 ${LANG_ENGLISH} "File Association allows us to define \
a program (in our case groovy) to execute upon \
double click on a file. This means that you can \
execute your groovy programs directly from the explorer.\
You need the native launcher for this.\
\r\n\r\nAn added benefit is that the groovy \
icon is associated with groovy files."
LangString FAField01 ${LANG_GERMAN}  "Dateiassoziation erlaubt es uns, ein \
Programm zu bestimmen (in unserem Fall Groovy), \
das automatisch beim Start einer Groovy-Datei \
ausgeführt wird. Sie können also mit Doppelklick \
im Explorer Ihre Groovy-Programme starten.\
Sie benötigen den 'Native Launcher' hierfür.\
\r\n\r\nZusätzlich wird das Groovy Icon mit \
Groovy-Dateien assoziiert."
LangString FAField01 ${LANG_SPANISH} "Asociación de Ficheros permite definir que \
un programa (en este caso Groovy) se ejecute al realizar \
doble click con el puntero sobre un fichero. Esto significa \
que usted podrá ejecutar programas Groovy directamente desde el Explorador de Windows. \
Para ello se requiere entonces del Lanzador Nativo.\
\r\nComo beneficio adicional habrá un ícono Groovy asociado a \
ficheros de tipo Groovy."
LangString FAField01 ${LANG_FRENCH}  "L'association fichier vous permet de définir \
un programme (dans notre cas groovy) pour exécuter un fichier groovy \
par simple double-click sur ce dernier. Ceci signifie que vous pouvez \
exécuter vos programmes groovy directement à partir d'un explorateur windows. \
Vous avez besoin du lanceur natif pour cela. \
\r\nUn bénéfice supplémentaire est que l'icone \
groovy est associée à tout fichier de type groovy."
LangString FAField01 ${LANG_PortugueseBR}  "Associação de arquivos nos permite definir \
um programa (no caso groovy) que executa com \
um duplo clique no arquivo. Isso significa que você pode \
executar seus programas escritos em Groovy diretamente do explorer. \
Você precisa do Native Launcher para isso.\
\r\n\r\nUm benefício adicional é que o icone do Groovy \
será associado aos arquivos .groovy."

# FAField 02
LangString FAField02 ${LANG_ENGLISH} "Add File Association"
LangString FAField02 ${LANG_GERMAN}  "Füge Dateiassoziation hinzu"
LangString FAField02 ${LANG_SPANISH} "Agregar Asociación de Ficheros"
LangString FAField02 ${LANG_FRENCH}  "Ajouter une association fichier"
LangString FAField02 ${LANG_PortugueseBR}  "Adicionar associação de arquivos"

# FAField 03
LangString FAField03 ${LANG_ENGLISH} "PATHEXT is an environment variable telling cmd.exe \
which files are executable. If Groovy-Files are already referenced, this checkbox \
is unchecked.  If you know better, please set the checkbox to checked."
LangString FAField03 ${LANG_GERMAN}  "PATHEXT ist eine Umgebungsvariable, die cmd.exe \
mitteilt, welche Dateien ausführbar sind. Wenn Groovy-Dateien schon referenziert \
sind, ist die Checkbox nicht ausgewählt. \
Wenn Sie Groovy trotzdem hinzufügen wollen, wählen Sie sie wieder an."
LangString FAField03 ${LANG_SPANISH} "PATHEXT es una variable de entorno que le indica \
a cmd.exe cuales ficheros son de tipo ejecutable. Si Groovy-Files ya esta referenciado, \
este botón aparecerá deseleccionado. Puede dejar el botón seleccionado si lo \
desea."
LangString FAField03 ${LANG_FRENCH}  "PATHEXT est une variable d'environnement indiquant \
à la commande cmd.exe \
quels fichiers sont des exécutables. Si les fichiers groovy sont déjà référencés, \
la boite à cocher est décochée. Si vous êtes expert, cochez ici svp."
LangString FAField03 ${LANG_PortugueseBR}  "PATHEXT é uma variável de ambiente que indica ao cmd.exe \
quais arquivos são executáveis. Se os arquivos Groovy já estão referenciados, este checkbox \
estará desmarcado. Se você preferir, por favor marque esse checkbox."

# FAField 04
LangString FAField04 ${LANG_ENGLISH} "Add to PATHEXT"
LangString FAField04 ${LANG_GERMAN}  "Füge zu PATHEXT hinzu"
LangString FAField04 ${LANG_SPANISH} "Agregar a PATHEXT"
LangString FAField04 ${LANG_FRENCH}  "Ajouter à PATHEXT"
LangString FAField04 ${LANG_PortugueseBR}  "Adicionar ao PATHEXT"

# AssocTitle
LangString AssocTitle ${LANG_ENGLISH} "File Associations ..."
LangString AssocTitle ${LANG_GERMAN}  "Dateiassoziationen ..."
LangString AssocTitle ${LANG_SPANISH} "Asociación de Ficheros ..."
LangString AssocTitle ${LANG_FRENCH}  "Association de fichiers ..."
LangString AssocTitle ${LANG_PortugueseBR}  "Associação de arquivos ..."

Function ReadFileAssociation

  SectionGetFlags ${SecVariables} $R0
  IntOp $R0 $R0 & ${SF_SELECTED}
  IntCmp $R0 ${SF_SELECTED} show

  Abort

  show:

  Push $R0

  # Localization
  #MessageBox MB_ICONEXCLAMATION|MB_OK "Result. $(Field10)"
  WriteINIStr $PLUGINSDIR\fileassociation.ini "Field 1" "Text" $(FAField01)
  WriteINIStr $PLUGINSDIR\fileassociation.ini "Field 2" "Text" $(FAField02)
  WriteINIStr $PLUGINSDIR\fileassociation.ini "Field 3" "Text" $(FAField03)
  WriteINIStr $PLUGINSDIR\fileassociation.ini "Field 4" "Text" $(FAField04)


  # Check for groovy in pathext
  ReadEnvStr $R0 "PATHEXT"
  Push $R0
  Push ".groovy"
  Call StrStr
  Pop $R0

  # set Pathext checkbox to unchecked if .groovy is already in Pathext
  ${If} $R0 != ''
    WriteINIStr $PLUGINSDIR\fileassociation.ini "Field 4" "state" "0"
  ${EndIf}

  #InstallOptions::dialog $PLUGINSDIR\fileassociation.ini
  ;If not using Modern UI use InstallOptions::dialog "iofile.ini"
  !insertmacro MUI_HEADER_TEXT "$(AssocTitle)" ""
  !insertmacro MUI_INSTALLOPTIONS_DISPLAY "fileassociation.ini"

  Pop $R0
FunctionEnd

Function SetFileAssociation
  Push $R0

  # If set, then create file association
  ReadINIStr $R0 "$PLUGINSDIR\fileassociation.ini" "Field 2" "State"
  ${If} $R0 == '1'
    # set file associations
    !define Index "Line${__LINE__}"
    ReadRegStr $1 HKCR ".groovy" ""
    StrCmp $1 "" "${Index}-NoBackup"
      StrCmp $1 "Groovy" "${Index}-NoBackup"
      WriteRegStr HKCR ".groovy" "backup_val" $1
    "${Index}-NoBackup:"
    WriteRegStr HKCR ".groovy" "" "Groovy"
    ReadRegStr $0 HKCR "Groovy" ""
    StrCmp $0 "" 0 "${Index}-Skip"
      WriteRegStr HKCR "Groovy" "" "Groovy.groovy"
      WriteRegStr HKCR "Groovy\shell" "" "open"
      WriteRegStr HKCR "Groovy\DefaultIcon" "" '"$INSTDIR\bin\groovy.exe",0'
    "${Index}-Skip:"
    WriteRegStr HKCR "Groovy\shell\open\command" "" '"$INSTDIR\bin\groovy.exe" "%1" %*'
    #WriteRegStr HKCR "Groovy\shell\edit" "" "Edit Options File"
    #WriteRegStr HKCR "Groovy\shell\edit\command" "" '$INSTDIR\execute.exe "%1"'

    System::Call 'Shell32::SHChangeNotify(i 0x8000000, i 0, i 0, i 0)'
    !undef Index
  ${EndIf}

  # Set PATHEXT if the user checked the resp. checkbox
  ReadINIStr $R0 "$PLUGINSDIR\fileassociation.ini" "Field 4" "State"
  ${If} $R0 == '1'
    ReadEnvStr $R0 "PATHEXT"
    StrCpy $R0 "$R0;.groovy;.gy"
    Push "PATHEXT"
    Push $R0
    Call WriteEnvStr
  ${EndIf}


  Pop $R0

FunctionEnd

!macro IsNT UN
Function ${UN}IsNT
  Push $0
  ReadRegStr $0 HKLM \
    "SOFTWARE\Microsoft\Windows NT\CurrentVersion" CurrentVersion
  StrCmp $0 "" 0 IsNT_yes
  ; we are not NT.
  Pop $0
  Push 0
  Return

  IsNT_yes:
    ; NT!!!
    Pop $0
    Push 1
FunctionEnd
!macroend
!insertmacro IsNT ""
!insertmacro IsNT "un."

#
# WriteEnvStr - Writes an environment variable
# Note: Win9x systems requires reboot
#
# Example:
#  Push "HOMEDIR"           # name
#  Push "C:\New Home Dir\"  # value
#  Call WriteEnvStr
#
Function WriteEnvStr
  Exch $1 ; $1 has environment variable value
  Exch
  Exch $0 ; $0 has environment variable name
  Push $2

  Call IsNT
  Pop $2
  StrCmp $2 1 WriteEnvStr_NT
    ; Not on NT
    StrCpy $2 $WINDIR 2 ; Copy drive of windows (c:)
    FileOpen $2 "$2\autoexec.bat" a
    FileSeek $2 0 END
    FileWrite $2 "$\r$\nSET $0=$1$\r$\n"
    FileClose $2
    SetRebootFlag true
    Goto WriteEnvStr_done

  WriteEnvStr_NT:

  ${If} $UserOrSystem == "all"
    ClearErrors
    WriteRegExpandStr ${NT_all_env} $0 $1

    IfErrors 0 WriteEnvStr_all_resume
      MessageBox MB_YESNO|MB_ICONQUESTION "The path could not be set for all users$\r$\nShould I try for the current user?" \
         IDNO WriteEnvStr_all_failed
      ; change selection
      StrCpy $UserOrSystem "current"
    WriteEnvStr_all_resume:
      SendMessage ${HWND_BROADCAST} ${WM_WININICHANGE} 0 "STR:Environment" /TIMEOUT=5000
      DetailPrint "added variable $0 for user ($UserOrSystem), $1"
    WriteEnvStr_all_failed:
  ${EndIf}


  ${If} $UserOrSystem == "current"
    ClearErrors
    WriteRegExpandStr ${NT_current_env} $0 $1

    IfErrors 0 WriteEnvStr_current_resume
      MessageBox MB_OK|MB_ICONINFORMATION "The path could not be set for the current user."
      Goto WriteEnvStr_current_failed
    WriteEnvStr_current_resume:
      SendMessage ${HWND_BROADCAST} ${WM_WININICHANGE} 0 "STR:Environment" /TIMEOUT=5000
      DetailPrint "added variable $0 for user ($UserOrSystem), $1"
    WriteEnvStr_current_failed:
  ${EndIf}

  WriteEnvStr_done:
    Pop $2
    Pop $0
    Pop $1
FunctionEnd


Function GetJRE
;
;  Find JRE (javaw.exe)
;  1 - in .\jre directory (JRE Installed with application)
;  2 - in JAVA_HOME environment variable
;  3 - in the registry
;  4 - assume javaw.exe in current dir or PATH

  Push $R0
  Push $R1

  ClearErrors
  StrCpy $R0 "$EXEDIR\jre\bin\javaw.exe"
  IfFileExists $R0 JreFound
  StrCpy $R0 ""

  ClearErrors
  ReadEnvStr $R0 "JAVA_HOME"
  StrCpy $R0 "$R0\bin\javaw.exe"
  IfErrors 0 JreFound

  ClearErrors
  ReadRegStr $R1 HKLM "SOFTWARE\JavaSoft\Java Runtime Environment" "CurrentVersion"
  ReadRegStr $R0 HKLM "SOFTWARE\JavaSoft\Java Runtime Environment\$R1" "JavaHome"
  StrCpy $R0 "$R0\bin\javaw.exe"

  IfErrors 0 JreFound
  StrCpy $R0 "javaw.exe"

 JreFound:
  Pop $R1
  Exch $R0
FunctionEnd

; Return on top of stack the total size of the selected (installed) sections, formated as DWORD
; Assumes no more than 256 sections are defined
Var GetInstalledSize.total
Function GetInstalledSize
  Push $0
  Push $1
  StrCpy $GetInstalledSize.total 0
  ${ForEach} $1 0 256 + 1
    ${if} ${SectionIsSelected} $1
      SectionGetSize $1 $0
      IntOp $GetInstalledSize.total $GetInstalledSize.total + $0
    ${Endif}

    ; Error flag is set when an out-of-bound section is referenced
    ${if} ${errors}
      ${break}
    ${Endif}
  ${Next}

  ClearErrors
  Pop $1
  Pop $0
  IntFmt $GetInstalledSize.total "0x%08X" $GetInstalledSize.total
  Push $GetInstalledSize.total
FunctionEnd
