/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewDoiTuong.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.DoiTuong.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.DoiTuong." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

