$(document).ready(function () {
    $(".counter").each(function () {
        $(this).prop("Counter",0).animate( {
            Counter : $(this).text()
        },{
            duration : 3500,
            step : function (now) {
                $(this).text(Math.ceil(now))
            }
        })
        
    })
})


$(".main-filter li").click(function (e){
    const listVAlue = $(this).attr("data-filter")
    var checkClassName = $(this).hasClass("active")
    e.preventDefault()
    $(".filter-item").removeClass("active")
    $(this).closest(".filter-item").addClass("active")
    console.log(listVAlue)
    if(listVAlue == "all") {
        $(".col-lg-4").show("1000");
    }
    else {
        $(".col-lg-4").not("." + listVAlue).hide("1000");
        $(".col-lg-4").filter("." + listVAlue).show("1000");
    }
  
});
 