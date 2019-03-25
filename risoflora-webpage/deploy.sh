#!/usr/bin/env bash


#npm run build

aws s3 rm s3://gruporisoflora.com/ --recursive  --region us-east-2

aws s3 sync build  s3://gruporisoflora.com/ --region us-east-2
aws s3 sync build  s3://www.gruporisoflora.com/ --region us-east-2
