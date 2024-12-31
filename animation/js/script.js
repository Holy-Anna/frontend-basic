$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1500,
        values: [39, 1230],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});


const shop_link = document.querySelector('.shop_link');
const span_planet = document.querySelector('.span_planet');

shop_link.addEventListener('mouseover', () => {
    span_planet.style.color = '#ffffff';
    span_planet.style.webkitTextStroke = '2.5px #46A358';
});

shop_link.addEventListener('mouseout', () => {
    span_planet.style.color = '#46A358';        
    span_planet.style.webkitTextStroke = '2.5px transparent';
});