/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewBenh.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Benh.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Benh." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

