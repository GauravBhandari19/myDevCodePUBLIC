package com.gaurav.camel.filecopier;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.camel.CamelContext;
import org.apache.camel.ProducerTemplate;
import org.apache.camel.RoutesBuilder;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.impl.DefaultCamelContext;
import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.PropertyConfigurator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Hello world!
 *
 */
public class App 
{
	
	final static Logger log = LoggerFactory.getLogger(App.class);
	
    public static void main( String[] args )
    {
        //BasicConfigurator.configure();
    	Properties props = new Properties();
    	try {
			System.out.println("Looking into::"+System.getProperty("user.dir"));
    		props.load(new FileInputStream("log4j.properties"));
		} catch (FileNotFoundException e1) {
			System.out.println(e1.getCause());
			e1.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		}
    	
    	PropertyConfigurator.configure(props);
    	CamelContext context = new DefaultCamelContext();
        try {
			context.addRoutes(new RouteBuilder() {
				
				@Override
				public void configure() throws Exception {
					System.out.println( "Sending...");
					log.info("Sending file");
					from("direct:start")
					.to("class:com.gaurav.camel.filecopier.Callme?method=hello");
					//from("file:data/inbox?noop=true").to("file:data/outbox");
					
				}
			});
				context.start();
				
				ProducerTemplate pt = context.createProducerTemplate();
				pt.sendBody("direct:start","Voila!!!");
				
				Thread.sleep(10000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        context.stop();
        //System.out.println( "Sent!!");
		log.info("Sent file ...");
        	
        
    }
}
