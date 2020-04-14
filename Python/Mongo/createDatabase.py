import pymongo

test = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = test["PythonAppDatabase"]
mycol = mydb["customers"]

mydict = { "name": "John", "address": "Highway 37" }
x = mycol.insert_one(mydict)

# Find One
x = mycol.find_one()

print('******************')
print('Find one!!!')
print(x)
print('******************')


# Find All
print('############ FIND ALL ############')
for x in mycol.find():
  print(x)

# Print all Databases
print(test.list_database_names())

# Print all Collections
print(mydb.list_collection_names())

# To check if Database Exists
dblist = test.list_database_names()
if "PythonAppDatabase" in dblist:
  print("The database exists.")
else:
    print('DB Does not exists....')

# To check if Collection exists
collist = mydb.list_collection_names()
if "customers" in collist:
  print("The collection exists.")
else:
    print('Collection does not exists')