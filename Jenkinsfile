pipeline {
    agent {
        docker {
            image 'node:14-alpine'
        }
    }
    environment {
        APP_DIR = '/var/www/html'
    }
    tools {
        nodejs 'npm'
    }
    stages {
        stage('Clean previous installation') {
            steps {
                echo 'Deleting previous files...'
                sh 'rm -rf build/*'
            }
        }       
        stage('Install dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'yarn install --frozen-lockfile'
            }
        }
        stage('Test application') {
            steps {
                echo 'Running tests...'
                sh 'yarn test'
            }
        }
        stage('Build application') {
            steps {
                echo 'Building application...'
                sh 'yarn build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh "cp -rp build/* ${env.APP_DIR}"
                sh 'sudo service apache2 reload'
                echo 'Deployment complete'
            }
        }
    }
    post {
        always {
            sh 'rm -rf build'
        }
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
