pipeline {
	agent any
	stages{
	    stage('Build Docker Image'){
	    	steps{
	    		sh 'docker build -t esp10-moodprism-dashboard --no-cache .'
	    		sh 'docker tag esp10-moodprism 192.168.160.99:5000/esp10-moodprism-dashboard'
	    		sh 'docker push 192.168.160.99:5000/esp10-moodprism'
	    	}
	    }
	 /*   stage('Deploy'){
	        sh 'docker tag react-app localhost:5000/react-app'
	        sh 'docker push localhost:5000/react-app'
	        sh 'docker rmi -f react-app localhost:5000/react-app'
	      }
	    }
	}*/
}