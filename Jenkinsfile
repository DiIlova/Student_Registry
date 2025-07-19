pipeline {
    agent any

    tools {
        nodejs "NodeJS_18"  // увери се, че си конфигурирала NodeJS в Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start app') {
            steps {
                bat 'start /B npm start'
                sleep time: 3, unit: 'SECONDS'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }
    }
}
