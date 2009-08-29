#!/usr/bin/env groovy
/**
 * Test Groovy Installation
 * A full installation is assumed
 */

import groovy.swing.SwingXBuilder
import org.codehaus.groovy.scriptom.*;

import griffon.builder.jide.JideBuilder
// 1.5 import org.kordamp.groovy.swing.jide.JideBuilder


/**
 * @author jbaumann
 *
 */
public class TestInstallation extends GroovyTestCase {

    void testGroovyVariableIsSet() {
        def groovyVar = System.getenv("GROOVY_HOME");
        assertNotNull groovyVar
    }
    
    void testDocumentationIsInstalled() {
        def groovyVar = System.getenv("GROOVY_HOME");
        assertNotNull groovyVar

        File nl = "$groovyVar/html" as File
        assertEquals true, nl.exists()

        def count = 0
        nl.eachFileRecurse{
            if(it.name =~ /index.html/) count++
        }
        assertEquals 3, count	// api, gapi, groovy-jdk
        
        nl = "$groovyVar/pdf" as File
        assertEquals true, nl.exists()
    }
    
    void testGroovyNativeLauncherIsInstalled() {
        def groovyVar = System.getenv("GROOVY_HOME");
        assertNotNull groovyVar
        File nl = "$groovyVar/bin/groovy.exe" as File
        assertEquals true, nl.exists()
    }

    void testGantIsInstalled() {
        def groovyVar = System.getenv("GROOVY_HOME");
        assertNotNull groovyVar
        File nl = "$groovyVar/bin/gant.exe" as File
        assertEquals true, nl.exists()
    }

    void testGroovyVersionReturnsValue() {
        def groovyVar = System.getenv("GROOVY_HOME");
        assertNotNull groovyVar
        def result = "$groovyVar/bin/groovy.exe -v".execute().text
        assert result =~ /Groovy Version/
    }

    void testGantVersionReturnsValue() {
        def groovyVar = System.getenv("GROOVY_HOME");
        assertNotNull groovyVar
        def result = "$groovyVar/bin/gant.exe -V".execute().text
        assert result =~ /Gant version/
    }

    void testInstantiateJideBuilder() {
        def jb = new JideBuilder()
        assertNotNull jb
    }

    void testInstantiateSwingXBuilder() {
        def sb = new SwingXBuilder()
        assertNotNull sb
    }
    
    void testScriptomInstalled() {

        Scriptom.inApartment
        {
          def scriptControl = new ActiveXObject("ScriptControl")
          assertNotNull scriptControl
          
          scriptControl.Language = "JScript"
          def result = scriptControl.Eval('2.0 + 2.0;')
          assertEquals 4, result
        }
    }
}
