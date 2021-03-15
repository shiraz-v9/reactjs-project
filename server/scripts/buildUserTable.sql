# Version:		1.0.0
# Date:			9/march/2021
# Author:		Kashif Tauseef 

USE tauseefk; 

DROP TABLE IF EXISTS HTMLWebUsers;
CREATE TABLE HTMLWebUsers(
userID int(10) NOT NULL AUTO_INCREMENT,
userName text(100) NOT NULL,
lastName text(100) NOT NULL,
userEmail text(100) NOT NULL,
PRIMARY KEY (userID)
);