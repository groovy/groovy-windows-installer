# Commandline
# /N   Install Native Launcher (only with silent install)
# /V   Set Variables (only with silent install)
# /F   Create File Associations (only with silent install)
# /A   Install Additional Packages (only with silent install)
# /ALL Install All (only with silent install)
# /S   Silent Install
# /D   Set Installation Directory


# We assume the following commandline parameters for the compilation
# DIR_PREFIX     is the full path to the directory containing the different modules
# SOURCE_VERSION defines the version of the release
# SOURCE_DIR     is the relative path to the groovy install directory
# NATIVE_DIR     is the relative path to the native launcher
# SCRIPTOM_DIR   is the relative path to the scriptom module
# GANT_DIR       is the relative path to the gant module
# GRAPHICS_B     is the relative path to the graphicsbuilder module
# SWINGX_B       is the relative path to the swingxbuilder module
# JIDE_B         is the relative path to the jidebuilder module
# VERSION_TXT    is the relative path to the installed_versions.txt
# DOC_DIR        is the relative path to the doc directory

Name Groovy

!define InstallerVersion 0.5.7

# Set the compression level
SetCompressor /SOLID lzma

# The source of the Groovy installation
!define SOURCEDIR "${DIR_PREFIX}\${SOURCE_DIR}"

# Defines
!define REGKEY "SOFTWARE\$(^Name)"
!define VERSION ${SOURCE_VERSION}
!define COMPANY ""
!define URL groovy.codehaus.org

# MUI defines
!define MUI_ICON "${NSISDIR}\Contrib\Graphics\Icons\modern-install.ico"
!define MUI_FINISHPAGE_NOAUTOCLOSE
!define MUI_STARTMENUPAGE_REGISTRY_ROOT HKLM
!define MUI_STARTMENUPAGE_REGISTRY_KEY ${REGKEY}
!define MUI_STARTMENUPAGE_REGISTRY_VALUENAME StartMenuGroup
!define MUI_STARTMENUPAGE_DEFAULTFOLDER Groovy
!define MUI_UNICON "${NSISDIR}\Contrib\Graphics\Icons\modern-uninstall.ico"
!define MUI_UNFINISHPAGE_NOAUTOCLOSE
!define MUI_LANGDLL_REGISTRY_ROOT HKLM
!define MUI_LANGDLL_REGISTRY_KEY ${REGKEY}
!define MUI_LANGDLL_REGISTRY_VALUENAME InstallerLanguage
!define MUI_HEADERIMAGE
!define MUI_HEADERIMAGE_BITMAP "header.bmp"
!define MUI_HEADERIMAGE_BITMAP_NOSTRETCH
!define MUI_WELCOMEFINISHPAGE_BITMAP "welcome.bmp"
!define MUI_WELCOMEFINISHPAGE_BITMAP_NOSTRETCH

# Included files
!include Sections.nsh
!include MUI.nsh
!include logiclib.nsh
!include WinMessages.NSH
!include FileFunc.nsh
!include  EnvVarUpdate.nsh

# Macros for reading command line parameters
!insertmacro GetParameters
!insertmacro GetOptions

# Reserved Files
!insertmacro MUI_RESERVEFILE_LANGDLL

# User and System Environment
!define NT_current_env 'HKCU "Environment"'
!define NT_all_env     'HKLM "SYSTEM\CurrentControlSet\Control\Session Manager\Environment"'

# Variables
Var StartMenuGroup
Var UserOrSystem

# Silent Installer Variables
Var AllOptions
Var InstallAll
Var NativeLauncher
Var SetVariables
Var FileAssociations
Var AdditionalPackages

# Installer pages
!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_STARTMENU Application $StartMenuGroup
!insertmacro MUI_PAGE_INSTFILES
Page custom ReadVariables SetVariables
Page custom ReadNativeLauncher InstallNativeLauncher
Page custom ReadAdditionalPackages InstallAdditionalPackages
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
InstallDir "$PROGRAMFILES\$(^Name)\$(^Name)-${VERSION}"
CRCCheck on
XPStyle on
ShowInstDetails show
VIProductVersion 1.1.0.0
VIAddVersionKey /LANG=${LANG_ENGLISH} ProductName Groovy
VIAddVersionKey ProductVersion "${VERSION}"
VIAddVersionKey /LANG=${LANG_ENGLISH} CompanyWebsite "${URL}"
VIAddVersionKey /LANG=${LANG_ENGLISH} FileVersion ""
VIAddVersionKey /LANG=${LANG_ENGLISH} FileDescription ""
VIAddVersionKey /LANG=${LANG_ENGLISH} LegalCopyright ""
InstallDirRegKey HKLM "${REGKEY}" Path
ShowUninstDetails show

# Installer sections
Section -Main SEC0000
    ${If} ${Silent}
        StrCpy $StartMenuGroup "Groovy"
        ${If} $NativeLauncher = 1
            Call InstallNativeLauncher
        ${EndIf}
        ${If} $SetVariables = 1
            Call ReadVariables
            Call SetVariables
        ${EndIf}
        ${If} $FileAssociations = 1
            Call SetFileAssociation
        ${EndIf}
        ${If} $AdditionalPackages = 1
            Call InstallAdditionalPackages
        ${EndIf}
        
    ${EndIf}

    SetOutPath $INSTDIR
    SetOverwrite on
    File /r "${SOURCEDIR}\*"
    File "${DIR_PREFIX}\${VERSION_TXT}"
    WriteRegStr HKLM "${REGKEY}\Components" Main 1
SectionEnd

Section -post SEC0001
    WriteRegStr HKLM "${REGKEY}" Path $INSTDIR
    SetOutPath $INSTDIR
    WriteUninstaller $INSTDIR\uninstall.exe
    !insertmacro MUI_STARTMENU_WRITE_BEGIN Application
    SetOutPath $SMPROGRAMS\$StartMenuGroup
    CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^UninstallLink).lnk" $INSTDIR\uninstall.exe
    !insertmacro MUI_STARTMENU_WRITE_END
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" DisplayName "$(^Name)"
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" DisplayVersion "${VERSION}"
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" URLInfoAbout "${URL}"
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" DisplayIcon $INSTDIR\uninstall.exe
    WriteRegStr HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)" UninstallString $INSTDIR\uninstall.exe
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

# Uninstaller sections
Section /o un.Main UNSEC0000
    RmDir /r /REBOOTOK $INSTDIR
    DeleteRegValue HKLM "${REGKEY}\Components" Main
SectionEnd

Section un.post UNSEC0001
    DeleteRegKey HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^UninstallLink).lnk"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^GroovyConsoleLink).lnk"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^GraphicsPadLink).lnk"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^HTMLLink).lnk"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^APILink).lnk"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^GAPILink).lnk"
    Delete /REBOOTOK "$SMPROGRAMS\$StartMenuGroup\$(^PDFLink).lnk"

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

!define RUSSELOPTION "Russel-option detected: Now reformatting the disc. \
Press ok to install Ubuntu and Groovy as an Ubuntu package."

# Installer functions
Function .onInit

    ${GetParameters} $AllOptions
    ClearErrors
    
    ${GetOptions} $AllOptions /N $NativeLauncher
    ${If} ${Errors}
        StrCpy $NativeLauncher "0"
    ${Else}
        StrCpy $NativeLauncher "1"    
    ${EndIf}
    ${GetOptions} $AllOptions /V $SetVariables
    ${If} ${Errors}
        StrCpy $SetVariables "0"
    ${Else}
        StrCpy $SetVariables "1" 
    ${EndIf}
    ${GetOptions} $AllOptions /F $FileAssociations
    ${If} ${Errors}
        StrCpy $FileAssociations "0"
    ${Else}
        StrCpy $FileAssociations "1"    
    ${EndIf}
    ${GetOptions} $AllOptions /A $AdditionalPackages
    ${If} ${Errors}
        StrCpy $AdditionalPackages "0"
    ${Else}
        StrCpy $AdditionalPackages "1"    
    ${EndIf}

    ${GetOptions} $AllOptions /ALL $InstallAll
    ${If} ${Errors}
        StrCpy $InstallAll "0"
    ${Else}
        StrCpy $NativeLauncher "1"
        StrCpy $SetVariables "1"
        StrCpy $FileAssociations "1"
        StrCpy $AdditionalPackages "1"
        StrCpy $InstallAll "1"    
    ${EndIf}

    InitPluginsDir
    !insertmacro MUI_LANGDLL_DISPLAY
    File /oname=$PLUGINSDIR\variables.ini variables.ini
    File /oname=$PLUGINSDIR\nativelauncher.ini nativelauncher.ini
    File /oname=$PLUGINSDIR\fileassociation.ini fileassociation.ini
    File /oname=$PLUGINSDIR\additionalpackages.ini additionalpackages.ini
      
    Push $CMDLINE
    Push "-russel"
    Call StrStr
    Pop $R0
  
    ${If} $R0 != ''
      MessageBox MB_ICONEXCLAMATION|MB_OK "${RUSSELOPTION}"
    ${EndIf}
    
FunctionEnd


# Uninstaller functions
Function un.onInit
    ReadRegStr $INSTDIR HKLM "${REGKEY}" Path
    !insertmacro MUI_STARTMENU_GETFOLDER Application $StartMenuGroup
    !insertmacro MUI_UNGETLANGUAGE
    !insertmacro SELECT_UNSECTION Main ${UNSEC0000}
FunctionEnd

#################################################################################################

### Environment

#################################################################################################

# VField 01
LangString VField01 ${LANG_ENGLISH} "Create GROOVY_HOME"
LangString VField01 ${LANG_GERMAN}  "Erzeuge GROOVY_HOME"
LangString VField01 ${LANG_SPANISH} "Crear GROOVY_HOME"
LangString VField01 ${LANG_FRENCH}  "Cr�er GROOVY_HOME"
LangString VField01 ${LANG_PortugueseBR}  "Criar GROOVY_HOME"

# VField 02
LangString VField02 ${LANG_ENGLISH} "Add to Path"
LangString VField02 ${LANG_GERMAN}  "Zum Pfad hinzuf�gen"
LangString VField02 ${LANG_SPANISH} "Agregar a la Ruta"
LangString VField02 ${LANG_FRENCH}  "Ajouter au chemin d'acc�s/au Path"
LangString VField02 ${LANG_PortugueseBR}  "Adicionar ao Path"

# VField 5
LangString VField05 ${LANG_ENGLISH} "If a reference to groovy is detected in the path, \
the checkbox for adding GROOVY_HOME to the path is unchecked. \
If you know better, please set the checkbox to checked.\r\n\r\n\
NB: The uninstaller won't restore old values (yet)."
LangString VField05 ${LANG_GERMAN} "Wenn eine Referenz zu groovy im Pfad entdeckt wird, \
wird die Checkbox f�r das Hinzuf�gen von GROOVY_HOME ausgeschaltet.\
Wenn Sie GROOVY_HOME trotzdem zum Pfad hinzuf�gen m�chten, w�hlen Sie sie wieder an.\r\n\r\n\
Achtung: Der Uninstaller merkt sich keine alten Werte (noch nicht)."
LangString VField05 ${LANG_SPANISH} "Si alguna referencia a Groovy es detectada en la ruta, \
el bot�n para agregar GROOVY_HOME a la ruta aparecer� deseleccionado. \
Puede dejar el bot�n seleccionado si lo desea.\r\n\r\n\
NB: El proceso de desinstalaci�n no restaurar� valores anteriores."
LangString VField05 ${LANG_FRENCH} "Si une r�f�rence vers groovy \
est d�tect�e dans le chemin d'acc�s, \
la boite  � cocher d'ajout de GROOVY_HOME au chemin d'acc�s est d�coch�e. \
Si vous �tes expert, cochez ici svp.\r\n\r\n\
NB: Le d�sinstalleur ne restaurera pas les anciennes valeurs (pas pour le moment)."
LangString VField05 ${LANG_PortugueseBR} "Se uma refer�ncia ao Groovy foi detectada, \
o checkbox para adicionar o GROOVY_HOME ao Path estar� desmarcada. \
Se voc� preferir, por favor marque esse checkbox.\r\n\r\n\
NB: O desinstalador n�o ir� restaurar os antigos valores (por enquanto)."

# VField 6
LangString VField06 ${LANG_ENGLISH} "User Environment or\r\nSystem Environment"
LangString VField06 ${LANG_GERMAN}  "Benutzerumgebung oder\r\nSystemumgebung"
LangString VField06 ${LANG_SPANISH} "Entorno de Usuario o\r\nEntorno de Sistema"
LangString VField06 ${LANG_FRENCH}  "Environnement utilisateur ou\r\nenvironnement syst�me"
LangString VField06 ${LANG_PortugueseBR}  "Apenas para esse usu�rio\r\nPara todos os usu�rios"


# VField 7
LangString VField07 ${LANG_ENGLISH} "Add to System Environment"
LangString VField07 ${LANG_GERMAN}  "Systemumgebung w�hlen"
LangString VField07 ${LANG_SPANISH} "Agregar a Entorno de Sistema"
LangString VField07 ${LANG_FRENCH}  "Ajouter � l'environnement syst�me"
LangString VField07 ${LANG_PortugueseBR}  "Adicionar �s vari�veis do sistema"

# VField 8
LangString VField08 ${LANG_ENGLISH} "Path to Groovy Home"
LangString VField08 ${LANG_GERMAN}  "Pfad zu Groovy Home"
LangString VField08 ${LANG_SPANISH} "Ruta a Groovy Home"
LangString VField08 ${LANG_FRENCH}  "Chemins d'acc�s au r�pertoire standard Groovy"
LangString VField08 ${LANG_PortugueseBR}  "Caminho para o diret�rio raiz do Groovy"

# VField 9
LangString VField09 ${LANG_ENGLISH} "Path Extension"
LangString VField09 ${LANG_GERMAN}  "Erweiterung des Pfades"
LangString VField09 ${LANG_SPANISH} "Extensi�n de Rutas"
LangString VField09 ${LANG_FRENCH}  "Extension du chemin d'acc�s"
LangString VField09 ${LANG_PortugueseBR}  "Extens�o do Path"

# JavaHomeWarning
LangString JavaHomeWarning ${LANG_ENGLISH} "JAVA_HOME is not set. Please set it \
to your Java installation, otherwise Groovy won't be able to work."
LangString JavaHomeWarning ${LANG_GERMAN}  "JAVA_HOME ist nicht gesetzt. \
Bitte setzen Sie die Umgebungsvariable, ansonsten kann Groovy nicht funktionieren."
LangString JavaHomeWarning ${LANG_SPANISH} "JAVA_HOME no est� definido. Por favor defina la ruta \
hacia la instalaci�n de Java, de lo contrario Groovy no podr� funcionar correctamente."
LangString JavaHomeWarning ${LANG_FRENCH}  "JAVA_HOME n'est pas positionn� sur le r�pertoire \
d'installation Java. Dans le cas contraire groovy ne fonctionnera pas."
LangString JavaHomeWarning ${LANG_PortugueseBR}  "JAVA_HOME n�o est� configurada. Por favor, configure \
para o diret�rio de instala��o do Java, caso contr�rio o Groovy n�o funcionar�."


#Additional Page for setting GROOVY_HOME and system path
Function ReadVariables
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
  
  InstallOptions::dialog $PLUGINSDIR\variables.ini

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
    Push "GROOVY_HOME"
    Push $R0
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

### Native Launcher

#################################################################################################

# NLField 01
LangString NLField01 ${LANG_ENGLISH} "The Native Launcher is an executable, that \
in most cases is preferrable to the normal \
launching scripts. If you want file associations, \
than you have to install the native launcher.\
\r\n\r\nIf you don't know what this is about, \
then leave the checkbox in the checked state."
LangString NLField01 ${LANG_GERMAN} "Der 'Native Launcher' ist ein ausf�hrbares \
Programm, das den Start-Skripten in den meisten \
F�llen �berlegen ist. Wenn Sie Datei-Assoziationen \
verwenden wollen, m�ssen sie den 'Native Launcher' \
installieren.\r\n\r\n\
Wenn Sie nicht wissen, was das bedeutet, \
lassen Sie die Checkbox angehakt."
LangString NLField01 ${LANG_SPANISH} "El Lanzador Nativo es una aplicaci�n ejecutable, que \
en la mayor�a de los casos es preferible a los ficheros de \
inicio tipo script. Si desea tener asociaciones a ficheros, \
entonces deber� instalar el Lanzador Nativo. \
\r\n\r\nSi no tiene conocimiento de lo anterior, entonces por favor \
deje el bot�n en estado seleccionado."
LangString NLField01 ${LANG_FRENCH}  "Le lanceur natif est un executable qui \
dans la majeure partie des cas est bien pr�f�rable � \
un lancement par scripts. Si vous voulez une association fichier, \
il est n�cessaire d'utiliser le lanceur natif.\
\r\n\r\nSi vous ne savez pas de quoi il s'agit, alors laissez \
la boite � cocher dans l'�tat coch�."
LangString NLField01 ${LANG_PortugueseBR}  "O Native Launcher � um execut�vel que, \
na maioria dos casos, � melhor do que executar \
scripts normalmente. Se voc� quer associa��o de arquivos, \
ent�o voc� deve instalar o Native Launcher.\
\r\n\r\nSe voc� n�o sabe o que � isso, \
ent�o deixe o checkbox marcado."

# NLField 02
LangString NLField02 ${LANG_ENGLISH} "Install Native Launcher"
LangString NLField02 ${LANG_GERMAN}  "Installiere Native Launcher"
LangString NLField02 ${LANG_SPANISH} "Instalar el Lanzador Nativo"
LangString NLField02 ${LANG_FRENCH}  "Installer le lanceur natif"
LangString NLField02 ${LANG_PortugueseBR}  "Instalar o Native Launcher"

Function ReadNativeLauncher
  Push $R0

  # Localization
  #MessageBox MB_ICONEXCLAMATION|MB_OK "Result. $(Field10)"
  WriteINIStr $PLUGINSDIR\nativelauncher.ini "Field 1" "Text" $(NLField01)
  WriteINIStr $PLUGINSDIR\nativelauncher.ini "Field 2" "Text" $(NLField02)
    
  InstallOptions::dialog $PLUGINSDIR\nativelauncher.ini

  Pop $R0
FunctionEnd

Var WhichGroovyConsole

Function InstallNativeLauncher
  Push $R0

  # If set, then install the native launcher
  ReadINIStr $R0 "$PLUGINSDIR\nativelauncher.ini" "Field 2" "State"
  ${If} $R0 == '1'
    SetOutPath $INSTDIR\bin
    File /oname=groovy.exe "${DIR_PREFIX}\${NATIVE_DIR}\groovy.exe"
    File /oname=groovyc.exe "${DIR_PREFIX}\${NATIVE_DIR}\groovy.exe"
    File /oname=groovysh.exe "${DIR_PREFIX}\${NATIVE_DIR}\groovy.exe"
    File /oname=java2groovy.exe "${DIR_PREFIX}\${NATIVE_DIR}\groovy.exe"

    File /oname=groovyw.exe "${DIR_PREFIX}\${NATIVE_DIR}\groovyw.exe"
    File /oname=groovyConsole.exe "${DIR_PREFIX}\${NATIVE_DIR}\groovyw.exe"

    StrCpy $WhichGroovyConsole "exe"
  ${Else}
    StrCpy $WhichGroovyConsole "bat"
  ${EndIf}

  !insertmacro MUI_STARTMENU_WRITE_BEGIN Application
  SetOutPath $SMPROGRAMS\$StartMenuGroup
  CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^GroovyConsoleLink).lnk" $INSTDIR\bin\GroovyConsole.$WhichGroovyConsole
  !insertmacro MUI_STARTMENU_WRITE_END    

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
ausgef�hrt wird. Sie k�nnen also mit Doppelklick \
im Explorer Ihre Groovy-Programme starten.\
Sie ben�tigen den 'Native Launcher' hierf�r.\
\r\n\r\nZus�tzlich wird das Groovy Icon mit \
Groovy-Dateien assoziiert."
LangString FAField01 ${LANG_SPANISH} "Asociaci�n de Ficheros permite definir que \
un programa (en este caso Groovy) se ejecute al realizar \
doble click con el puntero sobre un fichero. Esto significa \
que usted podr� ejecutar programas Groovy directamente desde el Explorador de Windows. \
Para ello se requiere entonces del Lanzador Nativo.\
\r\nComo beneficio adicional habr� un �cono Groovy asociado a \
ficheros de tipo Groovy."
LangString FAField01 ${LANG_FRENCH}  "L'association fichier vous permet de d�finir \
un programme (dans notre cas groovy) pour ex�cuter un fichier groovy \
par simple double-click sur ce dernier. Ceci signifie que vous pouvez \
ex�cuter vos programmes groovy directement � partir d'un explorateur windows. \
Vous avez besoin du lanceur natif pour cela. \
\r\nUn b�n�fice suppl�mentaire est que l'icone \
groovy est associ�e � tout fichier de type groovy."
LangString FAField01 ${LANG_PortugueseBR}  "Associa��o de arquivos nos permite definir \
um programa (no caso groovy) que executa com \
um duplo clique no arquivo. Isso significa que voc� pode \
executar seus programas escritos em Groovy diretamente do explorer. \
Voc� precisa do Native Launcher para isso.\
\r\n\r\nUm benef�cio adicional � que o icone do Groovy \
ser� associado aos arquivos .groovy."

# FAField 02
LangString FAField02 ${LANG_ENGLISH} "Add File Association"
LangString FAField02 ${LANG_GERMAN}  "F�ge Dateiassoziation hinzu"
LangString FAField02 ${LANG_SPANISH} "Agregar Asociaci�n de Ficheros"
LangString FAField02 ${LANG_FRENCH}  "Ajouter une association fichier"
LangString FAField02 ${LANG_PortugueseBR}  "Adicionar associa��o de arquivos"

# FAField 03
LangString FAField03 ${LANG_ENGLISH} "PATHEXT is an environment variable telling cmd.exe \
which files are executable. If Groovy-Files are already referenced, this checkbox \
is unchecked.  If you know better, please set the checkbox to checked."
LangString FAField03 ${LANG_GERMAN}  "PATHEXT ist eine Umgebungsvariable, die cmd.exe \
mitteilt, welche Dateien ausf�hrbar sind. Wenn Groovy-Dateien schon referenziert \
sind, ist die Checkbox nicht ausgew�hlt. \
Wenn Sie Groovy trotzdem hinzuf�gen wollen, w�hlen Sie sie wieder an."
LangString FAField03 ${LANG_SPANISH} "PATHEXT es una variable de entorno que le indica \
a cmd.exe cuales ficheros son de tipo ejecutable. Si Groovy-Files ya esta referenciado, \
este bot�n aparecer� deseleccionado. Puede dejar el bot�n seleccionado si lo \
desea."
LangString FAField03 ${LANG_FRENCH}  "PATHEXT est une variable d'environnement indiquant \
� la commande cmd.exe \
quels fichiers sont des ex�cutables. Si les fichiers groovy sont d�j� r�f�renc�s, \
la boite � cocher est d�coch�e. Si vous �tes expert, cochez ici svp."
LangString FAField03 ${LANG_PortugueseBR}  "PATHEXT � uma vari�vel de ambiente que indica ao cmd.exe \
quais arquivos s�o execut�veis. Se os arquivos Groovy j� est�o referenciados, este checkbox \
estar� desmarcado. Se voc� preferir, por favor marque esse checkbox."

# FAField 04
LangString FAField04 ${LANG_ENGLISH} "Add to PATHEXT"
LangString FAField04 ${LANG_GERMAN}  "F�ge zu PATHEXT hinzu"
LangString FAField04 ${LANG_SPANISH} "Agregar a PATHEXT"
LangString FAField04 ${LANG_FRENCH}  "Ajouter � PATHEXT"
LangString FAField04 ${LANG_PortugueseBR}  "Adicionar ao PATHEXT"

Function ReadFileAssociation
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
    
  InstallOptions::dialog $PLUGINSDIR\fileassociation.ini

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



#################################################################################################

### Additional Packages

#################################################################################################

# APField 01
LangString APField01 ${LANG_ENGLISH} "Additional Modules are not strictly necessary, \
but we recommend installing them anyway."
LangString APField01 ${LANG_GERMAN}  "Zus�tzliche Module sind nicht unbedingt notwendig, \
wir empfehlen aber, sie trotzdem zu installieren."
LangString APField01 ${LANG_SPANISH} "Los M�dulos Adicionales no son estrictamente \
necesarios, pero recomendamos que se instalen de todas formas."
LangString APField01 ${LANG_FRENCH}  "Les Modules aditionnels sont optionnels, \
nous vous recommendons cependant de les installer"
LangString APField01 ${LANG_PortugueseBR}  "M�dulos adicionais n�o s�o estritamente necess�rios, \
mesmo assim recomendamos que sejam instalados."

# APField 02
LangString APField02 ${LANG_ENGLISH} "Gant - a build tool for scripting Ant tasks \
with Groovy"
LangString APField02 ${LANG_GERMAN}  "Gant - Ein Werkzeug, um Ant Tasks mit Groovy \
zu programmieren"
LangString APField02 ${LANG_SPANISH} "Gant - una herramienta que facilita el \
'scripting' the tareas de Ant con Groovy"
LangString APField02 ${LANG_FRENCH}  "Gant - Outil de build permettant de manipuler \
les t�ches Ant avec Groovy"
LangString APField02 ${LANG_PortugueseBR}  "Gant - uma ferramenta de build para criar tarefas do Ant \
com scripts Groovy"

# APField 03
LangString APField03 ${LANG_ENGLISH} "Scriptom - script ActiveX or COM components \
with Groovy"
LangString APField03 ${LANG_GERMAN}  "Scriptom - Programmieren von ActiveX und COM-\
Komponenten mit Groovy"
LangString APField03 ${LANG_SPANISH} "Scriptom - permite acceder y configurar \
components ActiveX y/o COM con Groovy"
LangString APField03 ${LANG_FRENCH}  "Scriptom - Manipulation d'ActiveX ou composants \
COM avec Groovy"
LangString APField03 ${LANG_PortugueseBR}  "Scriptom - acesse componentes ActiveX ou COM \
com Groovy"

# APField 04
LangString APField04 ${LANG_ENGLISH} "GraphicsBuilder - 2D Graphics with Groovy"
LangString APField04 ${LANG_GERMAN}  "GraphicsBuilder - 2D Graphics mit Groovy"
LangString APField04 ${LANG_SPANISH} "GraphicsBuilder - Gr�ficas 2D con Groovy"
LangString APField04 ${LANG_FRENCH}  "GraphicsBuilder - Graphiques 2D avec Groovy"
LangString APField04 ${LANG_PortugueseBR}  "GraphicsBuilder - Gr�ficos 2D com Groovy"

# APField 05
LangString APField05 ${LANG_ENGLISH} "SwingXBuilder, JideBuilder - The SwingX and Jide Components for Groovy"
LangString APField05 ${LANG_GERMAN}  "SwingXBuilder, JideBuilder - Die SwingX- und Jide-Komponenten f�r Groovy"
LangString APField05 ${LANG_SPANISH} "SwingXBuilder, JideBuilder - Componentes SwingX y/o Jide para Groovy"
LangString APField05 ${LANG_FRENCH}  "SwingXBuilder, JideBuilder - Les composants SwingX et Jide pour Groovy"
LangString APField05 ${LANG_PortugueseBR}  "SwingXBuilder, JideBuilder - Os Componentes SwingX ou Jide para Groovy"

# APField 06
LangString APField06 ${LANG_ENGLISH} "Groovy Documentation - including  a \
PDF Snapshot of the Wiki (ca. 900 pages)"
LangString APField06 ${LANG_GERMAN}  "Groovy-Dokumentation - inkl. \
PDF-Abzug des Wiki (ca. 900 Seiten)"
LangString APField06 ${LANG_SPANISH} "Documentaci�n de Groovy - incluye copia \
del wiki en PDF (aprox. 900 p�ginas)"
LangString APField06 ${LANG_FRENCH}  "Documentation de Groovy - dont un PDF \
du wiki (900 pages)"
LangString APField06 ${LANG_PortugueseBR}  "Groovy Documentation - incluindo um \
PDF extraido da Wiki (aprox. 900 p�ginas)"

Function ReadAdditionalPackages
  Push $R0

  # Localization
  WriteINIStr $PLUGINSDIR\additionalpackages.ini "Field 1" "Text" $(APField01)
  WriteINIStr $PLUGINSDIR\additionalpackages.ini "Field 2" "Text" $(APField02)
  WriteINIStr $PLUGINSDIR\additionalpackages.ini "Field 3" "Text" $(APField03)
  WriteINIStr $PLUGINSDIR\additionalpackages.ini "Field 4" "Text" $(APField04)
  WriteINIStr $PLUGINSDIR\additionalpackages.ini "Field 5" "Text" $(APField05)
  WriteINIStr $PLUGINSDIR\additionalpackages.ini "Field 6" "Text" $(APField06)
    
  InstallOptions::dialog $PLUGINSDIR\additionalpackages.ini

  Pop $R0
FunctionEnd

Var WhichGraphicsPad

Function InstallAdditionalPackages
  Push $R0

  # If set, then install Gant
  ReadINIStr $R0 "$PLUGINSDIR\additionalpackages.ini" "Field 2" "State"
  ${If} $R0 == '1'
    SetOutPath $INSTDIR\bin
    File  /r "${DIR_PREFIX}\${GANT_DIR}\bin\gant*"
    File  /nonfatal /r "${DIR_PREFIX}\${GANT_DIR}\bin\startGroovy*"

    SetOutPath $INSTDIR\lib
    File  /r "${DIR_PREFIX}\${GANT_DIR}\lib\gant*.jar"
    File  /nonfatal /r "${DIR_PREFIX}\${GANT_DIR}\lib\ivy*.jar"
    File  /nonfatal /r "${DIR_PREFIX}\${GANT_DIR}\lib\maven*.jar"

    SetOutPath $INSTDIR\conf
    File  /nonfatal /r "${DIR_PREFIX}\${GANT_DIR}\conf\*"
    
    SetOutPath $INSTDIR\supplementary
    File  /nonfatal /r "${DIR_PREFIX}\${GANT_DIR}\supplementary\*"
    
    Push $R0

    # If set, then install the native launcher
    ReadINIStr $R0 "$PLUGINSDIR\nativelauncher.ini" "Field 2" "State"
    ${If} $R0 == '1'
        SetOutPath $INSTDIR\bin
#        File /oname=gant.exe "${DIR_PREFIX}\${NATIVE_DIR}\gant.exe"
#        File /oname=gantw.exe "${DIR_PREFIX}\${NATIVE_DIR}\gantw.exe"
        File /oname=gant.exe "${DIR_PREFIX}\${NATIVE_DIR}\groovy.exe"
        File /oname=gantw.exe "${DIR_PREFIX}\${NATIVE_DIR}\groovyw.exe"
    ${EndIf}
    Pop $R0  
  ${EndIf}

  # If set, then install Scriptom
  ReadINIStr $R0 "$PLUGINSDIR\additionalpackages.ini" "Field 3" "State"
  ${If} $R0 == '1'
    SetOutPath $INSTDIR
    File  /r "${DIR_PREFIX}\${SCRIPTOM_DIR}\*"
  ${EndIf}

  # If set, then install GraphicsBuilder
  ReadINIStr $R0 "$PLUGINSDIR\additionalpackages.ini" "Field 4" "State"
  ${If} $R0 == '1'
    SetOutPath $INSTDIR
    File  /r "${DIR_PREFIX}\${GRAPHICS_B}\*"

    # If set, then install the native launcher
    Push $R0
    ReadINIStr $R0 "$PLUGINSDIR\nativelauncher.ini" "Field 2" "State"
    ${If} $R0 == '1'
        SetOutPath $INSTDIR\bin
        File /oname=graphicsPad.exe "${DIR_PREFIX}\${NATIVE_DIR}\groovyw.exe"

        StrCpy $WhichGraphicsPad "exe"
    ${Else}
        StrCpy $WhichGraphicsPad "bat"
    ${EndIf}

    Pop $R0
    
  ${EndIf}

  # If set, then install SwingXBuilder
  ReadINIStr $R0 "$PLUGINSDIR\additionalpackages.ini" "Field 5" "State"
  ${If} $R0 == '1'
    SetOutPath $INSTDIR
    File  /r "${DIR_PREFIX}\${SWINGX_B}\*"
    File  /r "${DIR_PREFIX}\${JIDE_B}\*"
  ${EndIf}

  # If set, then install Documentation
  ReadINIStr $R0 "$PLUGINSDIR\additionalpackages.ini" "Field 6" "State"
  ${If} $R0 == '1'
    SetOutPath $INSTDIR
    File  /r "${DIR_PREFIX}\${DOC_DIR}\*"
    
  ${EndIf}

  # Create the links for documentation and Graphicspad

  !insertmacro MUI_STARTMENU_WRITE_BEGIN Application
  SetOutPath $SMPROGRAMS\$StartMenuGroup

  ReadINIStr $R0 "$PLUGINSDIR\additionalpackages.ini" "Field 4" "State"
  ${If} $R0 == '1'
    CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^GraphicsPadLink).lnk" $INSTDIR\bin\graphicsPad.$WhichGraphicsPad
  ${EndIf}

  ReadINIStr $R0 "$PLUGINSDIR\additionalpackages.ini" "Field 6" "State"
  ${If} $R0 == '1'
    CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^HTMLLink).lnk" $INSTDIR\html\groovy-jdk\index.html
    CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^APILink).lnk" $INSTDIR\html\api\index.html
    CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^GAPILink).lnk" $INSTDIR\html\gapi\index.html
    CreateShortcut "$SMPROGRAMS\$StartMenuGroup\$(^PDFLink).lnk" $INSTDIR\pdf\wiki-snapshot.pdf
  ${EndIf}

  !insertmacro MUI_STARTMENU_WRITE_END

  Pop $R0

FunctionEnd


# Links in Start Menu

LangString ^UninstallLink ${LANG_ENGLISH} "Uninstall $(^Name)"
LangString ^UninstallLink ${LANG_GERMAN} "Deinstalliere $(^Name)"
LangString ^UninstallLink ${LANG_SPANISH} "Uninstall $(^Name)"
LangString ^UninstallLink ${LANG_FRENCH} "Uninstall $(^Name)"
LangString ^UninstallLink ${LANG_PortugueseBR} "Desinstalar $(^Name)"

LangString ^PDFLink ${LANG_ENGLISH} "PDF Documentation"
LangString ^PDFLink ${LANG_GERMAN} "PDF-Dokumentation"
LangString ^PDFLink ${LANG_SPANISH} "Documentaci�n en PDF"
LangString ^PDFLink ${LANG_FRENCH} "Documentation PDF"
LangString ^PDFLink ${LANG_PortugueseBR} "Documenta��o em PDF"

LangString ^HTMLLink ${LANG_ENGLISH} "GDK Documentation"
LangString ^HTMLLink ${LANG_GERMAN} "GDK-Dokumentation"
LangString ^HTMLLink ${LANG_SPANISH} "Documentaci�n del GDK"
LangString ^HTMLLink ${LANG_FRENCH} "Documentation du GDK"
LangString ^HTMLLink ${LANG_PortugueseBR} "Documenta��o do GDK"

LangString ^APILink ${LANG_ENGLISH} "API Documentation"
LangString ^APILink ${LANG_GERMAN} "API-Dokumentation"
LangString ^APILink ${LANG_SPANISH} "Documentaci�n del API"
LangString ^APILink ${LANG_FRENCH} "Documentation de l'API"
LangString ^APILink ${LANG_PortugueseBR} "Documenta��o da API"

LangString ^GAPILink ${LANG_ENGLISH} "GAPI Documentation"
LangString ^GAPILink ${LANG_GERMAN} "GAPI-Dokumentation"
LangString ^GAPILink ${LANG_SPANISH} "Documentaci�n del GAPI"
LangString ^GAPILink ${LANG_FRENCH} "Documentation de la GAPI"
LangString ^GAPILink ${LANG_PortugueseBR} "Documenta��o da GAPI"

LangString ^GroovyConsoleLink ${LANG_ENGLISH} "Start GroovyConsole"
LangString ^GroovyConsoleLink ${LANG_GERMAN} "Starte GroovyConsole"
LangString ^GroovyConsoleLink ${LANG_SPANISH} "Start GroovyConsole"
LangString ^GroovyConsoleLink ${LANG_FRENCH} "Start GroovyConsole"
LangString ^GroovyConsoleLink ${LANG_PortugueseBR} "Iniciar GroovyConsole"

LangString ^GraphicsPadLink ${LANG_ENGLISH} "Start GraphicsPad"
LangString ^GraphicsPadLink ${LANG_GERMAN} "Starte GraphicsPad"
LangString ^GraphicsPadLink ${LANG_SPANISH} "Start GraphicsPad"
LangString ^GraphicsPadLink ${LANG_FRENCH} "Start GraphicsPad"
LangString ^GraphicsPadLink ${LANG_PortugueseBR} "Iniciar GraphicsPad"

/*
;====================================================
; get_NT_environment 
;     Returns: the selected environment
;     Output : head of the stack
;====================================================
!macro select_NT_profile UN
Function ${UN}select_NT_profile
   MessageBox MB_YESNO|MB_ICONQUESTION "Change the environment for all users?$\r$\nSaying no here will change the envrironment for the current user only.$\r$\n(Administrator permissions required for all users)" \
      IDNO environment_single
      DetailPrint "Selected environment for all users"
      Push "all"
      Return
   environment_single:
      DetailPrint "Selected environment for current user only."
      Push "current"
      Return
FunctionEnd
!macroend
!insertmacro select_NT_profile ""
!insertmacro select_NT_profile "un."


*/


#
# [un.]IsNT - Pushes 1 if running on NT, 0 if not
#
# Example:
#   Call IsNT
#   Pop $0
#   StrCmp $0 1 +3
#     MessageBox MB_OK "Not running on NT!"
#     Goto +2
#     MessageBox MB_OK "Running on NT!"
#
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
