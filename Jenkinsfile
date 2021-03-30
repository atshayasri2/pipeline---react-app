pipeline {
    agent any
    
    tools { nodejs "node"}
    
    
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
                    steps {
                        bat test.bat
                    }
                }
                stage('Deliver') {
                            steps {
                                bat deliver.bat
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                bat kill.bat
                            }
                        }

    }
}
