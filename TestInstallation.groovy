#!/usr/bin/env groovy
/**
 * Test Groovy Installation
 * A full installation is assumed
 */

import groovy.swing.SwingXBuilder
import org.codehaus.groovy.scriptom.*
import groovy.util.Eval
import groovy.lang.GroovyShell
import spock.util.EmbeddedSpecRunner

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
    
    void testGaelykIsInstalled() {
        def groovyVar = System.getenv("GROOVY_HOME");
        assertNotNull groovyVar
        File gd = "$groovyVar/Supplementary/Gaelyk" as File
        assertEquals true, gd.exists()
        List files = gd.list()
        assertTrue files.size != 0
        assertTrue files.find{it =~ /gaelyk/} != null
    }

    void testGPars() {
    	String gparsScript = """
			import static groovyx.gpars.actor.Actors.actor
			def decryptor = actor { 
				loop {
					react {message -> 
						if (message instanceof String) reply message.reverse() 
						else stop() 
					}
				}
			}
			def console = actor { 
				decryptor.send 'lellarap si yvoorG' 
				react { 
					value = 'Decrypted message: ' + it 
					decryptor.send false 
				} 
			}
			[decryptor, console]*.join()
			return value
    	"""
    	
		Object result = Eval.me(gparsScript)
		assertEquals result, "Decrypted message: Groovy is parallel"
    }
    
    void testEasyb() {
        String easybScript = """
            import org.easyb.*
            import org.easyb.listener.ResultsCollector

            Configuration configuration = new ConsoleConfigurator().configure('easybTest.story');
            BehaviorRunner runner = new BehaviorRunner(configuration, new ResultsCollector());
            boolean success = runner.runBehaviors(BehaviorRunner.getBehaviors(configuration.getFilePaths(), 
                configuration));
        """

        assertTrue Eval.me(easybScript) == true
    }
    
    void testSpock() {
        String spockScript = """
            import spock.lang.*
            class HelloSpock extends spock.lang.Specification {
                def "can you figure out what I'm up to?"() {
                    expect:
                    name.size() == size

                    where:
                    name << ["Kirk", "Spock", "Scotty"]
                    size << [4, 5, 6]
                }
            }
        """
        org.junit.runner.Result result = new EmbeddedSpecRunner().run(spockScript)
        assertTrue result.fFailures.size == 0
    }
}
