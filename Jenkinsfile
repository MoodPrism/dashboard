pipeline {
	agent any
	stages{
	    stage('Build Docker Image'){
	    	steps{
	    		sh 'docker build -t esp10-moodprism-dashboard .'
	    		sh 'docker tag esp10-moodprism 192.168.160.99:5000/esp10-moodprism-dashboard'
	    		sh 'docker push 192.168.160.99:5000/esp10-moodprism-dashboard'
	    	}
	    }
	    stage('Deploy'){
	    	steps{
		    	sshagent(credentials:['esp10_ssh_runtimeVM']){
					sh 'ssh -o StrictHostKeyChecking=no esp10@192.168.160.103 docker run --rm -it -d -p 1080:8080 --name esp10-moodprism 192.168.160.99:5000/esp10-moodprism-dashboard'	 
	        	}
	        }
	    }
	}
}
