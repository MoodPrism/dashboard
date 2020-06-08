pipeline {
	agent any
	stages{
	    stage('Build Docker Image'){
	    	steps{
	    		sh 'docker build -f Dockerfile.prod -t esp10-moodprism-dashboard .'
	    		sh 'docker tag esp10-moodprism-dashboard 192.168.160.99:5000/esp10-moodprism-dashboard'
	    		sh 'docker push 192.168.160.99:5000/esp10-moodprism-dashboard'
	    	}
	    }
	    stage('Deploy'){
	    	steps{
		    	sshagent(credentials:['esp10_ssh_runtimeVM']){
				sh 'ssh -o StrictHostKeyChecking=no esp10@192.168.160.103 docker stop esp10-moodprism-dashboard'
				sh 'ssh -o StrictHostKeyChecking=no esp10@192.168.160.103 docker image rm 192.168.160.99:5000/esp10-moodprism-dashboard'
					sh 'ssh -o StrictHostKeyChecking=no esp10@192.168.160.103 docker run --rm -it -d -p 1070:80 --name esp10-moodprism-dashboard 192.168.160.99:5000/esp10-moodprism-dashboard'	 
	        	}
	        }
	    }
	}
}

//testar localmente
//docker run --rm -it -d -p 1070:80 --name esp10-moodprism-dashboard 192.168.160.99:5000/esp10-moodprism-dashboard
