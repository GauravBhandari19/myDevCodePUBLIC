package com.gaurav.camel.filecopier;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PDFFile {
	
	final static Logger log = LoggerFactory.getLogger(App.class);
	Properties props = new Properties();

	public static void main (String[] args)
	{
		PDFFile f = new PDFFile();
		f.hello();
	}

	private void hello() {
		// TODO Auto-generated method stub
		try {
			System.out.println("Looking into::"+System.getProperty("user.dir"));
    		props.load(new FileInputStream("log4j.properties"));
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			System.out.println(e1.getLocalizedMessage());
			System.out.println(e1.getMessage());
			System.out.println(e1.getCause());
			e1.printStackTrace();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
	}
}
