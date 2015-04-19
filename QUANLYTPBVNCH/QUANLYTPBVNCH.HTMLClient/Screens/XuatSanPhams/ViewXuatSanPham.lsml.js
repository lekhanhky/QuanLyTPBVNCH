/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewXuatSanPham.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.XuatSanPham.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.XuatSanPham." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

