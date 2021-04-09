$(document).ready(function () {
    // init isotope
    let $grid = $(".picture-container").isotope({
        // option
    });
    // filter item on click button
    $(".filter-button-group").on("click", "button", function () {
        let filterValue = $(this).attr("data-filter");
        $grid.isotope({
            filter: filterValue,
        });
    });

    // images loaded
    $grid.imagesLoaded().progress(function () {
        $grid.isotope("layout");
    });
});
