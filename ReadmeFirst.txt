NSIS Groovy
-----------

This directory contains the NSIS installer for Groovy as a project for Eclipse.

To use it, simply check it out into an Eclipse workspace. Additionally you might
want to install the NSISEclipse-Plugin, it helps when developing NSIS stuff.

If you have worked with NSIS-scripts already there should be no big problem understanding
what is done. The only important thing is to download an NSIS-version that works with
long strings (8192 characters). Otherwise you get into trouble adding to the potentially
very long path variables of some users.

The main script is the file setup.nsi, where you can find the installer program.
Two additional pages are defined, Variables and FileAssociation,
and for each you can find the respective .ini file containing the screen placement.
Simply open them in the design editor provided by the Eclipse-Plugin, and you can
see what they look like.

Two bmp-images contain the Groovy logo in different resolutions, one for the welcome
page and one as header image for the other pages. The name is the game ...

Finally you have the launch scripts. These actually start the compiler with different
settings for the groovy version, the groovy location (on your hard disk) and the
location of the native launcher. The groovy version influences the final name of the
installer.

The launch scripts are setting a lot of variables that you should adapt to your needs.
They are explained at the head of the setup.nsi file.

Most probably you only have to set these variables and you are happy to go.

Here is a checklist what to do for a full build (or what I do at least, for 1.7.0):
---------------------------------------------------------------------------------------
Setup NSIS
- Download NSIS-2.46-setup.exe (http://nsis.sourceforge.net/Download)
- Download nsis-2.46-strlen_8192.zip (http://nsis.sourceforge.net/Special_Builds#Large_strings)
- Patch NSIS installation to use long strings

Setup Installer Infrastructure
- Download NSIS Files from Rep.
- Setup Eclipse to launch build

Setup Directory for Groovy Files
- Download
  - Groovy
  - Groovy Docs
  - Scriptom (place examples into supplementary\Scriptom\ directory)
  - Download msvcr80.dll if you don't have it on your system
  - Add msvcr80.dll to Scriptom's bin directory
  - Griffon Builders (download using wget command in griffonbuilders.txt)
  - Gaelyk (place zip file in Gaelyk subdir)
  - GPars (with third-party jars)
  - Gant
    - Download supplementary jars (maven-ant-tasks-2.0.10.jar)
    - Remove file startGroovy.bat from bin directory
    - Correct the jar file name in the lib directory if necessary
  - Spock (place examples into supplementary\Spock\ directory)
  - Native Launcher and compile it with Cygwin support
    (place exe without Cygwin support into subdirectory NativeLauncherNoCygwinSupport)

Setup Launch Script
- copy from existing in repository
- adapt to paths in your setup directory

Start installer creation

Test local installation
- Install fully on local machine
- groovy -v
- gant -V
  - add syntactic error to gant-starter.conf
  - groovy -v must work, gant -V must not
  - remove error, do same for groovy-starter.conf
- Check Menu for correct entries
- Start GroovyConsole
- Execute TestInstallation.groovy from cmd.exe
  - using "groovy TestInstallation.groovy"
  - using "TestInstallation.groovy"
- Execute "groovy TestInstallation.groovy" from Cygwin bash
- Execute tridentbuilder.groovy in GroovyConsole
- Uninstall, verify that menu has been deleted fully and that the installation directory is removed
---------------------------------------------------------------------------------------

Have fun, Joachim

Contact: joachim.baumann@xinaris.de
