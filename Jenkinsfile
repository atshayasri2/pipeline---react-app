pipeline {
    agent any
    
    tools { nodejs "node"}
    
    
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
         stage('Deliver') {
             steps {
                bat 'npm run build'
            }
        }

    }
}
