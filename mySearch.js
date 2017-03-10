function mySearch(){ 
   var json, x, search, i, n;
   json = 
      {"carStock": [ 
            {"color": "red", "type": "Porsche 911", "yearOfConstruction": 2000, "price": 60000}, 
            {"color": "black", "type": "Porsche Panamera", "yearOfConstruction": 2010, "price": 120000}, 
            {"color": "green", "type": "VW Beetle", "yearOfConstruction": 1960, "price": 8000, "notes": "damaged at the front bumper"}, 
            {"color": "blue", "type": "Audi A5", "yearOfConstruction": 1998, "price": 28345}, 
            {"color": "yellow", "type": "Ferrari 430 Spider", "yearOfConstruction": 1990, "price": 80435}, 
            {"color": "gray", "type": "Audi Commodore", "yearOfConstruction": 1992, "price": 8212} ]
      };

   x = "";
   search = document.getElementById("input").value;
 
   $.each(json.carStock, function(i, n) {
      if ((n.color.indexOf(search)==0) || (n.type.indexOf(search)==0) || (n.price.toString().indexOf(search)==0)) {
         x += "<table>";             
         for (var element in n){
            if (element==="yearOfConstruction")
               x += "<tr><th>YEAR OF CONSTRUCTION</th><td>" + n[element] + "</td></tr>";
            else
               x += "<tr><th>" + element.toUpperCase() + "</th><td>" + n[element] + "</td></tr>";
         }
         x += "</table><br>";
      }
   });
   
   document.getElementById("results").innerHTML = x;
   innerHTML = x;
}
