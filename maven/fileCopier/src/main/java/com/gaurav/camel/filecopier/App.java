package com.gaurav.camel.filecopier;

import org.apache.camel.CamelContext;
import org.apache.camel.RoutesBuilder;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.impl.DefaultCamelContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" +System.getenv("user.dir"));
        CamelContext context = new DefaultCamelContext();
        try {
			context.addRoutes(new RouteBuilder() {
				
				@Override
				public void configure() throws Exception {
					// TODO Auto-generated method stub
					System.out.println( "Sending...");
					from("file:data/inbox?noop=true").to("file:data/outbox");
					
				}
			});
				context.start();
				Thread.sleep(10000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        	context.stop();
        
    }
}
