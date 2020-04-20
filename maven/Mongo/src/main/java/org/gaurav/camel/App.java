package org.gaurav.camel;

import org.apache.camel.CamelContext;
import org.apache.camel.impl.DefaultCamelContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        App a = new App();
        a.process();


    }
    void process()
    {
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("application-context.xml");
        CamelContext context = new DefaultCamelContext();
        mongoRoute m = new mongoRoute();

        try {
            context.addRoutes(m);
        } catch (Exception e) {
            e.printStackTrace();
        }

        context.start();

    }
}
