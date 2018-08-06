$(document).ready(function(){
    $("#read-more").click(function(){ 
        $("#modal").fadeIn()

        $("#modal .model-description").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus hendrerit lacus, non semper enim lobortis vitae.")
    })

    $("#what-offer").click(function(){ 
        $("#modal").fadeIn()

        $("#modal .model-description").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus hendrerit lacus, non semper enim lobortis vitae.")
    })

    $("#modal .shadow").click(function(e){
        $("#modal").fadeOut()   
    })

    $("#modal .close").click(function(e){
        $("#modal").fadeOut()
    })
});