class HelloSpock extends spock.lang.Specification {
    def "can you figure out what I'm up to?"() {
        expect:
        name.size() == size

        where:
        name << ["Kirk", "Spock", "Scotty"]
        size << [4, 5, 6]
    }
}

