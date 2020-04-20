package org.gaurav.camel;

import org.apache.camel.builder.RouteBuilder;

public class mongoRoute extends RouteBuilder {
    @Override
    public void configure(){
        from("jetty:http://localhost:4444/hello")
                .to("class:org.gaurav.camel.calledClass?method=hello")
                .to("mongodb:mongo?database=admin;collection=customerdb;operation=getDbStats");
    }
}
