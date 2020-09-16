#!/bin/sh -l
export AWS_ACCESS_KEY_ID="$2"
export AWS_SECRET_ACCESS_KEY="$3"
export AWS_DEFAULT_REGION=eu-north-1
AWS_BUCKET_NAME="$4"
aws s3 cp --recursive "$1" "s3://$AWS_BUCKET_NAME"