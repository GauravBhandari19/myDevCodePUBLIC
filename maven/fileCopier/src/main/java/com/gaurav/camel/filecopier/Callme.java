package com.gaurav.camel.filecopier;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Callme {
	final static Logger log = LoggerFactory.getLogger(Callme.class);
	Properties props = new Properties();
	
	
	
	void hello()
	{
		try {
			props.load(new FileInputStream("log4j.properties"));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("##########  HELLLO!!!! ###############");
		log.debug("##### Yay!!!! #####");
		log.info("##### Yay, Info!!!! #####");
	}
}
