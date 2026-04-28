pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Deploying EducConnect..."

                    sudo mkdir -p /var/www/educconnect
                    sudo rsync -av --delete --exclude='.git*' . /var/www/educconnect/

                    echo "Deployment completed."
                '''
            }
        }
    }

    post {
        success {
            echo '✅ EducConnect deployed successfully'
        }
        failure {
            echo '❌ Deployment failed'
        }
    }
}
