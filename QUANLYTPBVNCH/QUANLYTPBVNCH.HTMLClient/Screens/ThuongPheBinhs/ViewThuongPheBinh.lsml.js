/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewThuongPheBinh.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ThuongPheBinh.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ThuongPheBinh." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

