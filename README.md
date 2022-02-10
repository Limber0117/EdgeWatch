### Download required binaries
curl -sSL http://bit.ly/2ysbOFE | bash -s -- 1.4.4 1.4.4 0.4.22

### Environment and System Setup 

## Create BFT orderer and gen tool
- make orderer-docker

- make configtxgen

- copy generated 'orderer' and 'configtxgen' to bft/bin folder

## Other envirnment setting
# GO installation

- download go1.15

- mkdir ${HOME}/gopath

- mv go ${HOME}/gopath

- chmod -R 777 go

- mkdir -p ${HOME}/gopath/src/github.com/hyperledger/

- gedit ~/.bashrc

- add the following at the end:

```
 export PATH=$PATH:$HOME/go/bin

 export GOPATH=$HOME/gopath

 export GOROOT=$HOME/go

 export GOBIN=$GOROOT/bin

 export PATH=$HOME/gopath/src/github.com/hyperledger/fabric/bft/bin:$PATH
```

- Update: source ~/.bashrc

- View: go env

# GO package installation:

- mkdir -p $GOPATH/src/golang/x

- cd $GOPATH/src/golang/x

- chmod -R 777 golang

# Download the required package:

- go env -w GO111MODULE=on

- go mod init

- git clone https://github.com/golang/tools.git

- go get golang/x/tools/go/packages

- go mod vendor

# Setup nodejs v8
# Setup docker

### Build system network
- start network with couchdb in bft/pbft-network folder
```
./byfn.sh up -a -s couchdb
```

- close network
```
./byfn.sh down
```

# About the .zip files

Many subfolders are zipped to zip files due to that those folders have too many files in them. Please unzip those .zip files and put the corresponding folders as subfolders of the root folder.
