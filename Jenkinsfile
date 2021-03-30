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
                        bat 'cd jenkins/scripts'
                        bat test.sh
                    }
                }
                stage('Deliver') {
                            steps {
                                bat 'cd jenkins/scripts'
                                bat deliver.sh
                                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                                bat 'cd jenkins/scripts'
                                bat kill.sh
                            }
                        }

    }
}
