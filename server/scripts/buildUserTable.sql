# Version:		8.0.22
# Date:			9/march/2021
# Author:		Kashif Tauseef 

USE tauseefk; 

DROP TABLE IF EXISTS HTMLWebUsers;
CREATE TABLE HTMLWebUsers(
userID int(10) NOT NULL AUTO_INCREMENT,
userName text(100) NOT NULL,
lastName text(100) NOT NULL,
userEmail text(100) NOT NULL,
userToken VARCHAR(32) DEFAULT NULL,
UNIQUE KEY userToken (userToken),
PRIMARY KEY (userID)
);