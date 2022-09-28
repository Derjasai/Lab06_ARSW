var apimock = apimock;
var app = (function (){
    var author;

    function getName() {
        $("#name").text(author + "'s " + "blueprints:");
    }

    function getNameAuthorBlueprints() {
        author = $("#inputName").val();
        apimock.getBlueprintsByAuthor(author,tableData);
    }

    var tableData = function( data) {
        $("#table tbody").empty();
        getName();
        const newRow = data.map((element) => {
            return {
                authorName: element.name,
                points: element.points.length
            }
        });

        newRow.map((elements) => {
            $("#tableBlueprints > tbody:last").append($("<tr><td>" + elements.authorName + "</td><td>" + elements.points.toString() +
                "</td><td>" + "<button  id=" + elements.authorName + ">open</button>" + "</td>"));
        });

        const total = newRow.reduce((suma, {points}) => suma + points, 0);

        $("#points").text(total);
        
    }

    return{
        getNameAuthorBlueprints: getNameAuthorBlueprints
    }
})();