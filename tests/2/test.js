function mySearch(){ 
   var obj, x, search, term, i, j, k;
   obj = 
      {"carStock": [ 
            {"color": "red", "type": "Porsche 911", "yearOfConstruction": 2000, "price": 60000}, 
            {"color": "black", "type": "Porsche Panamera", "yearOfConstruction": 2010, "price": 120000}, 
            {"color": "green", "type": "VW Beetle", "yearOfConstruction": 1960, "price": 8000, "notes": "damaged at the front bumper"}, 
            {"color": "blue", "type": "Audi A5", "yearOfConstruction": 1998, "price": 28345}, 
            {"color": "yellow", "type": "Ferrari 430 Spider", "yearOfConstruction": 1990, "price": 80435}, 
            {"color": "gray", "type": "Audi Commodore", "yearOfConstruction": 1992, "price": 8212} ]
      };

   x = "Results: <br><br>";

   var searcher = function (term){
      for (i in obj.carStock){
         for (j in obj.carStock[i]){
            if (obj.carStock[i][j] == term){
               for (k in obj.carStock[i]){ 
                  if (k === "yearOfConstruction")
                     x += "YEAR OF CONSTRUCTION: " + obj.carStock[i][k] + "<br>";
                  else
                     x += k.toUpperCase()+ ": " + obj.carStock[i][k] + "<br>"; 
               }
            } 
         }
      }
   }

   searcher(document.getElementById("input").value);

   document.getElementById("test").innerHTML = x;
   innerHTML = x;
}
