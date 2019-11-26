$(document).ready(function() {
    $.getJSON("data.json", function(data){
        for (i=0; i < data.length; i++){
            var rowContent = [];
            var name = data[i]["name"];
            var description = data[i]["description"];
            var locationX = data[i]["location"][0];
            var locationy = data[i]["location"][1];
            var url = "https://www.google.com/maps?q=" + locationX + "," + locationy;
            rowContent.push(name, description, "");
            var newTR = document.createElement("tr");
            for (x=0; x < rowContent.length; x++){
                var newTD = document.createElement("td");
                var tdContent = document.createTextNode(rowContent[x]);
                if (x % 3 == 2){
                    var newButton = document.createElement("button");
                    var attr = document.createAttribute("onclick");
                    attr.value = ("window.location='" + url + "'");
                    newButton.setAttributeNode(attr);
                    newButton.innerHTML = "click me";
                    newTD.appendChild(newButton);
                } 
                newTD.appendChild(tdContent);
                newTR.appendChild(newTD);
            }
            document.getElementById("main-table").appendChild(newTR);
        }
    });
})




