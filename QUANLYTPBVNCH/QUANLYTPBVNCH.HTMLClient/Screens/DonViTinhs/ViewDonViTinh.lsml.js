/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewDonViTinh.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.DonViTinh.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.DonViTinh." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

