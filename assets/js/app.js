var currentTheme = "light";

var switchTheme = function () {
    if (currentTheme == "light") {
        $(".body-light").addClass("body-dark").removeClass("body-light");
        $(".header-wrapper-light").addClass("header-wrapper-dark").removeClass("header-wrapper-light");
        $(".site-card-light").addClass("site-card-dark").removeClass("site-card-light");
        $(".overview-card-light").addClass("overview-card-dark").removeClass("overview-card-light");
        currentTheme = "dark";
    } else {
        $(".body-dark").addClass("body-light").removeClass("body-dark");
        $(".header-wrapper-dark").addClass("header-wrapper-light").removeClass("header-wrapper-dark");
        $(".site-card-dark").addClass("site-card-light").removeClass("site-card-dark");
        $(".overview-card-dark").addClass("overview-card-light").removeClass("overview-card-dark");
        currentTheme = "light";
    }
}

getIconName = function (platformName) {
    switch (platformName) {
        case 'Facebook':
            return 'facebook';
        case 'Youtube':
            return 'youtube';
        case 'Instagram':
            return 'instagram';
        case 'Twitter':
            return 'twitter';
    }
}

$(document).ready(function () {
    var data = JSON.parse(localStorage.getItem("data"));
    for (var i = 0; i < data.length; i++) {
        $("#row-wrapper").append(
            `<div class="col-md-3">
                <div class="site-card-light text-center py-5 rounded-2 ${getIconName(data[i].platform)}">
                    <div class="username-wrapper d-flex gap-2 align-items-center justify-content-center">
                        <i class="fa-brands fa-${getIconName(data[i].platform)}"></i>
                        <span>${data[i].username}</span>
                    </div>
                    <div class="number-value-wrapper">
                        ${data[i].number_value}
                    </div>
                    <div class="value-label-wrapper">
                        ${data[i].label_value}
                    </div>
                </div>
            </div>`)
    }

    $("#themeSwitcher").click(function () {
        console.log("hello")
        switchTheme();
    })
})