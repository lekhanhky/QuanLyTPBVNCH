﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewChuongTrinh.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ChuongTrinh.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ChuongTrinh." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

