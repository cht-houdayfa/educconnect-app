pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Starting EducConnect deployment..."

                    sudo mkdir -p /var/www/educconnect
                    sudo rm -rf /var/www/educconnect/*
                    sudo cp -r . /var/www/educconnect/

                    echo "Deploy completed successfully."
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
