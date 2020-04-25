package org.gaurav.camel;

import org.apache.camel.builder.RouteBuilder;

import com.mongodb.*;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.apache.camel.builder.RouteBuilder;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class mongoRoute extends RouteBuilder {
    Logger log = LoggerFactory.getLogger(mongoRoute.class);


    @Override
    public void configure(){
        MongoClient client = new MongoClient("localhost",27017);
        MongoDatabase db = client.getDatabase("customerdb");

        BasicDBObject searchQuery = new BasicDBObject();
        searchQuery.put("name", "Geebee");
        System.out.println("Name:"+db.getName());
        Iterable itr = db.listCollectionNames();
        for (Object str:itr)
        {
            System.out.println("Collection:"+String.valueOf(str));
            log.info("Collection:{}",String.valueOf(str));
        }

        MongoCollection<Document> table = db.getCollection("customer");
        FindIterable<Document> cursor = table.find(searchQuery);
        Document doc = table.find().first();

        log.info("JSON Doc::{}",doc.toJson());

    }
}
