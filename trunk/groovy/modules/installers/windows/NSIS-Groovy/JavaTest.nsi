!define InstallerVersion 0.7.2

# Set the compression level
SetCompressor /SOLID lzma


# Defines
!define COMPANY ""
!define URL groovy.codehaus.org
!define ShortName Groovy
!define VERSION ${SOURCE_VERSION}
Name "Groovy-${Version}"
!define REGKEY "SOFTWARE\$(^Name)"
!define SUPPLEMENTARY "Supplementary"

# MUI defines
!define MUI_FINISHPAGE_NOAUTOCLOSE
!define MUI_STARTMENUPAGE_REGISTRY_ROOT HKLM
!define MUI_STARTMENUPAGE_REGISTRY_KEY ${REGKEY}
!define MUI_STARTMENUPAGE_REGISTRY_VALUENAME StartMenuGroup
!define MUI_STARTMENUPAGE_DEFAULTFOLDER $(^Name)
!define MUI_UNFINISHPAGE_NOAUTOCLOSE
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
!insertmacro MUI_PAGE_COMPONENTS
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
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
OutFile "JavaTestnsi.exe"
InstallDir "c:\Tmp"
CRCCheck on
XPStyle on
ShowInstDetails show
InstallDirRegKey HKLM "${REGKEY}" Path
ShowUninstDetails show

# @Todo add correct translations
LangString NoJava ${LANG_ENGLISH} "Cannot identify Java installation. Assuming 32 bit version."
LangString NoJava ${LANG_GERMAN} "Die Java-Installation kann nicht identifiziert werden. Gehe von einer 32-Bit Installation aus."
LangString NoJava ${LANG_SPANISH} "Cannot identify Java installation. Assuming 32 bit version."
LangString NoJava ${LANG_FRENCH} "Impossible d'identifier la version de Java installée. Version 32 bits supposée."
LangString NoJava ${LANG_PortugueseBR} "Cannot identify Java installation. Assuming 32 bit version."

# Install Types
InstType "Full"
InstType "Minimal"

# Installer sections
Section "Groovy Binaries" SecBinaries
    SectionIn RO    # this section cannot be deselected
    SetOutPath $INSTDIR
    SetOverwrite on


    SetOutPath $INSTDIR\${SUPPLEMENTARY}\JavaArch
    File /r "${JAVA_ARCH}\GetArchModel.jar"
    File /r "${JAVA_ARCH}\GetArchDataModel.java"
    
    # Now execute JRE
    Call GetJRE
    Pop $R0
        MessageBox MB_OK ' Path to Java: $R0'
    # StrCpy $0 '"$R0" -classpath "${CLASSPATH}" ${CLASS}'
    StrCpy $0 '"$R0" -jar "$INSTDIR\${SUPPLEMENTARY}\JavaArch\GetArchModel.jar"'
    
    ExecWait $0 $JavaArchModel
        
    ${If} ${Errors} 
        MessageBox MB_OK "Execution led to the following error: $(Errors)"
    ${OrIf} $JavaArchModel == 1
        # We assume a 32-bit installation
        MessageBox MB_OK $(NoJava)
    ${EndIf}

    MessageBox MB_OK "Result of Execution: $JavaArchModel"

    
SectionEnd



!insertmacro MUI_FUNCTION_DESCRIPTION_BEGIN
  !insertmacro MUI_DESCRIPTION_TEXT ${SecBinaries} $(DESC_SecBinaries)
!insertmacro MUI_FUNCTION_DESCRIPTION_END

Section -post SEC0006
    WriteRegStr HKLM "${REGKEY}" Path $INSTDIR
    SetOutPath $INSTDIR
    WriteUninstaller $INSTDIR\uninstall.exe
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


Section /o "un.Groovy Binaries" UNSEC0000
    Delete /REBOOTOK $INSTDIR\${VERSION_TXT}
    RmDir /r /REBOOTOK $INSTDIR
    DeleteRegValue HKLM "${REGKEY}\Components" "${REG_GROOVY_BINARIES}"
SectionEnd

Section un.post UNSEC0999
    DeleteRegKey HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$(^Name)"
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
    !insertmacro SELECT_UNSECTION GPars ${UNSEC0007}
    !insertmacro SELECT_UNSECTION Spock ${UNSEC0008}
    !insertmacro SELECT_UNSECTION Easyb ${UNSEC0009}
    !insertmacro SELECT_UNSECTION GMock ${UNSEC0010}
    !insertmacro SELECT_UNSECTION GroovyServ ${UNSEC0011}
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