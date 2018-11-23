#! /bin/bash
############################
# make build
############################
react-scripts build
cd ./build

############################
# deploy & link alias domain
############################
now && now alias

cd ..
############################
# inject secrets (gitignored)
############################
yarn inject-secrets 
# ../inject-secrets.sh NOT WORKING -  ./inject-secrets.sh: Permission denied - error Command failed with exit code 126.