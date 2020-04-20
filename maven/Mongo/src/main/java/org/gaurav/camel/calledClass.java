package org.gaurav.camel;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class calledClass {
    Logger log = LoggerFactory.getLogger(calledClass.class);
    void hello()
    {
        System.out.println("Hello");
        log.info("### Some Message ####");
    }
}
