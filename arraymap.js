var mymap=new Map();
mymap.set("key1","Bd");
mymap.set("key2","Ind");
mymap.set("key3","Pak");
mymap.set("key4","Aus");
mymap.delete("key3");
for(var map of mymap.values())
{
    console.log(map);
}

console.log(mymap.values());
