/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditXuatSanPham.Benhs_postRender = function (element, contentItem) {
    // Write code here.
    lsWire.list.enableMultiSelect(contentItem);
};
myapp.AddEditXuatSanPham.Thêm_Thoát_execute = function (screen) {

    // Write code here.
    screen.closePopup();
};
myapp.AddEditXuatSanPham.Thêm_Thoát1_execute = function (screen) {
    // Write code here.
    var list = screen.findContentItem("SanPhams");

    //var count = lsWire.list.selectedCount(list);

    var selected = lsWire.list.selected(list);

    //var text = "Món bạn đã chọn gồm \n\n";

    _.forEach(selected, function (item) {
        var newChiTiet = screen.XuatSanPhamChiTiets.addNew();
        newChiTiet.setSanPham(item);
        var soluong = screen.SoLuongs.data[0];
        newChiTiet.setSoLuong(soluong);
        newChiTiet.setGiá_bán(0);
        newChiTiet.setGiá_vốn(0);
        newChiTiet.setPhần_trăm_thuế(0);
        });
    myapp.applyChanges().then(function success() {
        window.alert("LƯU THÀNH CÔNG !");
    }, function fail(e) {
        window.alert("LƯU THẤT BẠI - CẦN LÀM TƯƠI LẠI !");
        //window.location.reload();
        myapp.cancelChanges();
        screen.closePopup();
    });

};
myapp.AddEditXuatSanPham.SanPhams_postRender = function (element, contentItem) {
    // Write code here.
    lsWire.list.enableMultiSelect(contentItem);
};
myapp.AddEditXuatSanPham.Xóa_Bệnh_execute = function (screen) {
    // Write code here.
    screen.XuatSanPhamBenhs.deleteSelected();
    return myapp.activeDataWorkspace.QuanLyTPBVNCHData
     .saveChanges().then(function () {
         // Refresh the Customers
         //screen.ChonMons.refresh();
         //screen.ChonMons.selectedItem = screen.ChonMons.data[0];
         //screen.Chọn_Món_Chi_Tiết.refresh();
         //var list = screen.findContentItem("Món");
         //lsWire.list.selectAll(list, false);
         window.alert("XÓA 'Bệnh' THÀNH CÔNG !");
         //window.location.reload();

         //screen.getChọn_Món_Chi_Tiết();

     });
};
myapp.AddEditXuatSanPham.Xóa_Thuốc_DC_execute = function (screen) {
    // Write code here.
    screen.XuatSanPhamChiTiets.deleteSelected();
    return myapp.activeDataWorkspace.QuanLyTPBVNCHData
     .saveChanges().then(function () {
         // Refresh the Customers
         //screen.ChonMons.refresh();
         //screen.ChonMons.selectedItem = screen.ChonMons.data[0];
         //screen.Chọn_Món_Chi_Tiết.refresh();
         //var list = screen.findContentItem("Món");
         //lsWire.list.selectAll(list, false);
         window.alert("XÓA 'Thuốc DC' THÀNH CÔNG !");
         //window.location.reload();

         //screen.getChọn_Món_Chi_Tiết();

     });
};
myapp.AddEditXuatSanPham.ShowBenh_execute = function (screen) {
    // Write code here.
    $(window).one("popupbeforeposition", function (e) {
        $(e.target).popup({
            positionTo: "window"
        });
    });
    // Show the Popup
    screen.showPopup("GroupBenh");
};
myapp.AddEditXuatSanPham.THOÁT_execute = function (screen) {
    // Write code here.
    screen.closePopup();
};
myapp.AddEditXuatSanPham.LƯU_execute = function (screen) {
    // Write code here.
    var list = screen.findContentItem("Benhs");

    //var count = lsWire.list.selectedCount(list);

    var selected = lsWire.list.selected(list);

    //var text = "Món bạn đã chọn gồm \n\n";

    _.forEach(selected, function (item) {
        var newChiTiet = screen.XuatSanPhamBenhs.addNew();
        newChiTiet.setBenh(item);
    });
    lsWire.list.selectAll(list, false);
    myapp.applyChanges().then(function success() {
        window.alert("LƯU THÀNH CÔNG !");
      }, function fail(e) {
        window.alert("LƯU THẤT BẠI - CẦN LÀM TƯƠI LẠI !");
        //window.location.reload();
        myapp.cancelChanges();
        screen.closePopup();
    });
};
myapp.AddEditXuatSanPham.ĐÓNG_execute = function (screen) {
    // Write code here.
    screen.closePopup();
};
myapp.AddEditXuatSanPham.XÓA_execute = function (screen) {
    // Write code here.
    screen.XuatSanPhamBenhs.deleteSelected();
    myapp.applyChanges().then(function success() {
        window.alert("XÓA THÀNH CÔNG !");
        screen.closePopup();
    }, function fail(e) {
        window.alert("XÓA THẤT BẠI - CẦN LÀM TƯƠI LẠI !");
        //window.location.reload();
        myapp.cancelChanges();
        screen.closePopup();
    });
};
myapp.AddEditXuatSanPham.ĐÓNG1_execute = function (screen) {
    // Write code here.
    screen.closePopup();
};
myapp.AddEditXuatSanPham.XÓA1_execute = function (screen) {
    // Write code here.
    screen.XuatSanPhamChiTiets.deleteSelected();
    myapp.applyChanges().then(function success() {
        window.alert("XÓA THÀNH CÔNG !");
        screen.closePopup();
    }, function fail(e) {
        window.alert("XÓA THẤT BẠI - CẦN LÀM TƯƠI LẠI !");
        //window.location.reload();
        myapp.cancelChanges();
        screen.closePopup();
    });
};
myapp.AddEditXuatSanPham.LƯU2_execute = function (screen) {
    // Write code here.
    myapp.applyChanges().then(function success() {
        window.alert("LƯU THÀNH CÔNG !");
    }, function fail(e) {
        window.alert("LƯU THẤT BẠI - CẦN LÀM TƯƠI LẠI !");
        //window.location.reload();
        myapp.cancelChanges();
        screen.closePopup();
    });
};
myapp.AddEditXuatSanPham.LƯU1_execute = function (screen) {
    // Write code here.
    myapp.applyChanges().then(function success() {
        window.alert("LƯU THÀNH CÔNG !");
    }, function fail(e) {
        window.alert("LƯU THẤT BẠI - CẦN LÀM TƯƠI LẠI !");
        //window.location.reload();
        myapp.cancelChanges();
        screen.closePopup();
    });
};