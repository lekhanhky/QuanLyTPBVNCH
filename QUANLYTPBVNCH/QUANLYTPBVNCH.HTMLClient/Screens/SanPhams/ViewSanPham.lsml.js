/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewSanPham.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.SanPham.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.SanPham." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

