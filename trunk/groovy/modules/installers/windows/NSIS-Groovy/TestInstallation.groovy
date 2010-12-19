#!/usr/bin/env groovy
/**
 * Test Groovy Installation
 * A full installation is assumed
 */

import groovy.util.Eval

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
        def result = "$groovyVar\\bin\\gant.exe -V".execute().text
        assert result =~ /Gant version/
    }

    void testInstantiateJideBuilder() {
        String jideBuilderScript = """
        import griffon.builder.jide.JideBuilder
        def jb = new JideBuilder()
        """        
        assertTrue Eval.me(jideBuilderScript) != null
    }

    void testInstantiateSwingXBuilder() {
        String swingXBuilderScript = """
        import groovy.swing.SwingXBuilder
        def sb = new SwingXBuilder()
        """        
        assertTrue Eval.me(swingXBuilderScript) != null
    }
    
    void testScriptomInstalled() {
    	String scriptomScript = """
    	import org.codehaus.groovy.scriptom.*

        Scriptom.inApartment
        {
          def scriptControl = new ActiveXObject("ScriptControl")
          assert scriptControl != null
          
          scriptControl.Language = "JScript"
          def result = scriptControl.Eval('2.0 + 2.0;')
        }
    	"""
    	
    	String dataModel = System.getProperty("sun.arch.data.model");
        int bits = Integer.parseInt(dataModel);
    	// only evaluate when on 32 bit system
        if(bits == 32) assertTrue Eval.me(scriptomScript) == 4    	
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
            BehaviorRunner runner = new BehaviorRunner(configuration);
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
    	org.junit.runner.JUnitCore.runClasses HelloSpock
        """
        assertTrue Eval.me(spockScript).wasSuccessful()
    }

    void testGMock() {
    	String gmockScript = """
    	import org.gmock.GMockTestCase
    	class GMockTest extends GMockTestCase {
    	    void testMock() {
    	        def mockLoader = mock()
    	        mockLoader.load('key').returns('value')
    	        mockLoader.put(1, 2).raises(IllegalArgumentException)
    	        play {
    	            assert "value" == mockLoader.load('key')
    	            shouldFail(IllegalArgumentException) {
    	                mockLoader.put(1, 2)
    	            }
    	        }
    	    }
    	    void testMockConstructor() {
    	        def mockLoader = mock(Loader, constructor(1, 2))
    	        mockLoader.put(3, 4)
    	        play {
    	            def loader = new Loader(1, 2)
    	            loader.put(3, 4)
    	        }
    	    }
    	    void testMockStaticMethods() {
    	        mock(Loader).static.initialise().returns(true)
    	        play {
    	            assert Loader.initialise()
    	        }
    	    }
    	    void testStrictOrdering() {
    	        def m = mock()
    	        ordered {
    	            m.a()
    	            m.b()
    	        }
    	        play {
    	            m.a()
    	            m.b()
    	        }
    	    }
    	}

    	class Loader {}

    	org.junit.runner.JUnitCore.runClasses GMockTest
    	"""
    	assertTrue Eval.me(gmockScript).wasSuccessful()
    }

}
