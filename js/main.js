// let section = $("#section2").offset().top;

// $(window).scroll(function(){

//     let top = $(window).scrollTop();

//     if(top > section)
//     {
//         $(".navbar").css({"backgroundColor":"white"});
//         $(".wrapper").css({"color" : "blue" });
//         $("#arrow").fadeIn(1000);
//     }
//     else
//     {
//             $(".navbar").css({"backgroundColor":"transparent"});
//             $(".wrapper").css({"color" : "white" });
//             $("#arrow").fadeOut(1000);
//     }
// })

// let offset = $(".adress").offset().top

// $("#services").click(function(){
//     $( "body").animate( {scrollTop:offset} , 1000);
// })


// $("#arrow").click(function()
// {
//     $("body , html").animate( {scrollTop:0} , 1500);
// })

// let section2 = $("#section2").offset().top
// $("#about").click(function()
// {
//     $("body , html").animate({scrollTop:section2}, 1500)
// })

// let section4 = $("#section4").offset().top

// $("#work").click(function()
// {
//     $("body , html").animate({scrollTop:section4} , 1500)
// })

// let section5 = $("#section5").offset().top

// $("#blog").click(function()
// {
//     $("html , body").animate({scrollTop:section5} , 1500)
// })

// let section6 = $("#section6").offset().top

// $("#contact").click(function()
// {
//     $("html , body").animate({scrollTop:section6}, 1500)
// })

// $("#home").click(function(){

//     $("html , body").animate( {scrollTop:0} , 1500)
// })

$("#arrow").click(function(){
    $("html , body").animate({scrollTop:0} , 1000)
})


let input = document.getElementById("input");
let show = document.getElementById("show");
let btn = document.getElementById("btn");
let cartona = ""


input.addEventListener('keyup' , function(){
    document.getElementById("alert").style.display = "block"
})

btn.addEventListener('click' , function(){

     cartona += `<strong><i class="fas fa-utensils"></i> `+input.value+`</strong>`
    document.getElementById("alert").innerHTML = cartona;
    input.value = ""
})