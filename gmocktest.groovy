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
