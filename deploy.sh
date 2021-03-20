#!/bin/bash
set -e

# Image tag is the last commit hash
IMAGE_TAG=`git rev-parse HEAD`
REPO_NAME="gyas-wedding-invitation"
GCP_PROJECT_NAME="data-media-283004"

docker build . -t $REPO_NAME:$IMAGE_TAG

docker tag $REPO_NAME gcr.io/$GCP_PROJECT_NAME/$REPO_NAME:$IMAGE_TAG

docker push gcr.io/$GCP_PROJECT_NAME/$REPO_NAME:$IMAGE_TAG

gcloud beta run deploy $REPO_NAME --image gcr.io/$GCP_PROJECT_NAME/$REPO_NAME:$IMAGE_TAG \
  --project $GCP_PROJECT_NAME \
  --platform managed \
  --region asia-northeast1 \
  --allow-unauthenticated