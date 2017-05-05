app.controller('CalculatorController', ['$scope', function ($scope) {
    $scope.hello = 5;
    
     $scope.goGeneral = function() { 
        $scope.isClicked = "general";
        $scope.isSelected = $scope.products[$scope.isClicked];
    };
    $scope.goKitchen = function() { 
        $scope.isClicked = "kitchen";
        $scope.isSelected = $scope.products[$scope.isClicked];
    };
    $scope.goTv = function() { 
        $scope.isClicked = "tv";
        $scope.isSelected = $scope.products[$scope.isClicked];
    };
    $scope.goElectronics = function() { 
        $scope.isClicked = "electronics";
        $scope.isSelected = $scope.products[$scope.isClicked];
    };
    $scope.done = function() {
         $scope.isClicked = "done";
        $scope.isSelected = $scope.products[$scope.isClicked];
        
        
        
    };
    
    
    
          
     $scope.products = {
        "general": 
        {
            "10 LED Bulb": 85,
            "30 LED Bulb": 255,
            "50 LED Bulb": 425,
            "10 Fluor. Bulb": 4250,
            "30 Fluor. Bulb": 12750,
            "50 Fluor. Bulb": 21250,
         },
         "kitchen":
         {
             "Blender": 350,
             "Coffe Machine": 1100,
             "Oven": 350,
             "Microwave": 1150,
             "Dish Washer": 275,
             "Fridge / Freezer": 275
                 
         }
        ,
         "tv": 
         {
             "Plasma TV": 300,
             "(20in+) LED TV": 80,
             "(60in+) LED TV": 150,
             "(20in+) LCD TV": 120,
             "(60in+) LCD TV": 250,
             "Xbox 360": 120,
             "Xbox One": 90,
             "Play Station 3": 800,
             "Play Station 4": 90,
             "Wii U": 32.6,
             "Smart Phone": 0,
             "PC": 275,
             "Laptop PC": 75,
             "iMac": 230,
             "Laptop Mac": 205,
             "Printer": 25,
             "Router": 10
                 
         }
         ,
         "electronics": 
         {
             "Electronic Razor": 17.5,
             "Blow Dryer": 2150,
             "Dryer": 2500,
             "Washer": 500,
             "Iron": 1000
         }
         ,
         "done": 
         {
         }
         
     };
    
    $scope.addItem = function(key) {
        if ($scope.products["done"][key]) {
            $scope.products["done"][key].number += 1;
            console.log($scope.products["done"][key]);
        }
        else {
            $scope.products["done"][key] = {name: key, number: 1, power: $scope.products[$scope.isClicked][key]};
            console.log($scope.products["done"][key]);
            
        }
        console.log($scope.products["done"]);
    };
    
        $scope.removeItem = function(key) {
        if ($scope.products["done"][key]) {
            if ($scope.products["done"][key].number == 1) {
                delete $scope.products["done"][key];
                
            }
            else if ($scope.products["done"][key].number > 1) {
                $scope.products["done"][key].number -= 1;
                
            }
                
            }
        };
    
    $scope.getNumber = function(key) {
        if ($scope.products["done"][key]) {
            return $scope.products["done"][key].number;
        }
        else {
            return 0;
            
        }
        
    }
    
    $scope.totalPower = function() {
        var total_sf = 0;
        for (var k in $scope.products["done"]) {
            var pow = $scope.products["done"][k].power;
            var num =  $scope.products["done"][k].number;
            total_sf += pow * num;
        };
        return total_sf;     
             
             
            
    }
    // m^2
    $scope.solarPanels = function() {
        var total_sf = 0;
        for (var k in $scope.products["done"]) {
            var pow = $scope.products["done"][k].power;
            var num =  $scope.products["done"][k].number;
            total_sf += pow * num;
        };
        return Math.floor(total_sf / 175);
    }
    // Riyal
    $scope.price = function() {
        var total_sf = 0;
        for (var k in $scope.products["done"]) {
            var pow = $scope.products["done"][k].power;
            var num =  $scope.products["done"][k].number;
            total_sf += pow * num;
        };
        return Math.floor(total_sf / 175 * 456);
    }
    
    
    
    
    
    
  
    
    
    
    
    
   
    
   
    
    
    

 
}]);