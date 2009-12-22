import static groovyx.gpars.actor.Actors.actor

/** * A demo showing two cooperating actors. The decryptor decrypts received messages and replies them back. * The console actor sends a message to decrypt, prints out the reply and terminates both actors. * The main thread waits on both actors to finish using the join() method to prevent premature exit, * since both actors use the default actor group, which uses a daemon thread pool. * @author Dierk Koenig, Vaclav Pech */

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
		println 'Decrypted message: ' + it 
		decryptor.send false 
	} 
}

[decryptor, console]*.join()

