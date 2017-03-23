package com.Intelligent.Xian.entity;

public class Organization {
	private long id;
	private String orgCertificate;   //certificate of organization
	private String ocAddress;			//address of organization certificate
	private String deAddress;			//detailed address
	private String lrName;	//name of legal Representative
	private String lrCType;  //constant the type of certificate of the legal representative
	private String lrNumber; //the number of the certifcate of the legal representative
	private String lrAddress; //the address the legal representative
	private String cpName;//the name of the contact person
	private String cpCertificate; //the certificate of the contact person
	private String cpcType;  //the certificate type of the contact person
	private String cpcNumber; //the certificate number of the contact person
	private String cpTeleNumber;//the telephone number of the contact person
	private String cpEmail; //the email of the contact person
	private Account account;
}
