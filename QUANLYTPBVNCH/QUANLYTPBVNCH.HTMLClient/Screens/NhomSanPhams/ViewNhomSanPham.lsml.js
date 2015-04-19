/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewNhomSanPham.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.NhomSanPham.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.NhomSanPham." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

