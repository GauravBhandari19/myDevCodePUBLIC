package org.gaurav.camel;

import org.apache.camel.CamelContext;
import org.apache.camel.impl.DefaultCamelContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 */
public class App {
    public static void main(String[] args) {
        App a = new App();
        a.process();


    }

    void process() {
        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("application-context.xml");

    }
}
