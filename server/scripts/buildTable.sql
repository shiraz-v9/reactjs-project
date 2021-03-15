# Version:		8.0.22
# Date:			9/march/2021
# Author:		Kashif Tauseef 

USE tauseefk; 

DROP TABLE IF EXISTS HTMLWebContent;

CREATE TABLE HTMLWebContent (
id int(10) NOT NULL AUTO_INCREMENT,
  tagName text(50) NOT NULL,
  tagDescription text(2000) NOT NULL,
  tagExample text(2000) NOT NULL,
  PRIMARY KEY (id)
) ;

