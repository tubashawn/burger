$(function () {
    
    // $("#undevour-btn, #devour-btn").on("click", function (event) {
    //     event.preventDefault();
    //     var id = $(this).val();
    //     var newDevouredState = {
    //         devoured: event.target.id == "devour-btn" ? true : false
    //     };

    //     $.ajax("./api/burgers/" + id, {
    //         type: "PUT",
    //         data: newDevouredState
    //     }).then(
    //         function () {
    //             location.reload();
    //         }
    //     );
    // });

    $("#burgerButton").on("click", function (event) {
        event.preventDefault();
        var name = $("#yourBurger").val().trim();
        if (name.length == 0) {
            return;
        }

        var data = {
            name: name,
            devoured: false
        };

        $.ajax("./api/burgers/", {
            type: "POST",
            data: data
        }).then(
            function () {
                console.log("submitted");
                location.reload();
            }
        );
    });
});