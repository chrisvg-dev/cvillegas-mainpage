pipeline {
    agent {
        docker {
            image 'node:14'
            args '-u root' // use root user to install packages
        }
    }
    
    stages {
        stage('Clean previous installation') {
            steps {
                sh 'echo delete previous files'
            }
        }       
        stage('Install dependencies') {
            steps {
                sh 'npm install -f'
            }
        }
        
        stage('Build application') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'cp -rp build/* /var/www/html'
                sh 'sudo service apache2 reload'
                sh 'echo Done'
            }
        }
    }
}