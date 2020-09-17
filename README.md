## Ubuntu 20.04: Complete implementation of ReplicaSet(Master Slave) using mongoose.

### Follow this documentation to successfully setup replica set: https://www.linode.com/docs/databases/mongodb/create-a-mongodb-replica-set/

### Go to nano /etc/mongodb.conf and paste the following:
```
dbpath=/var/lib/mongodb                                                                                                                
logpath=/var/log/mongodb/mongodb.log                                                                                                    
logappend=true                                                                                                                          
bind_ip = 127.0.0.1                                                                                                                    
journal=true
```
### Check if your log file is present there and check for dbpath too.

### Then download this repo, open it in your editor, install node_modules and run it using nodemon index.js

### Visit this documentation to perform other operations: https://mongoosejs.com/docs/connections.html
