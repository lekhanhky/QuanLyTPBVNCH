
Namespace LightSwitchApplication

    Public Class XuatSanPhamsListDetail
        Dim flagEdit As Boolean
        Dim flagEdit1 As Boolean
        Private Sub XuatSanPhamListAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub XuatSanPhamListAddAndEditNew_Execute()
            ' Write your code here.
            Me.XuatSanPhams.AddNew()
            Me.FindControl("ChuongTrinh1").Focus()
        End Sub

        Private Sub OK_Execute()
            ' Write your code here.
            Me.CloseModalWindow("GroupChiTiet")
        End Sub

        Private Sub Hủy_Execute()
            ' Write your code here.
            If flagEdit Then
                CType(Me.XuatSanPhamChiTiets.SelectedItem, XuatSanPhamChiTiet).Details.DiscardChanges()
            Else
                Me.XuatSanPhamChiTiets.DeleteSelected()
            End If
            Me.CloseModalWindow("GroupChiTiet")
        End Sub

        Private Sub OK1_Execute()
            ' Write your code here.
            Me.CloseModalWindow("GroupBenh")
        End Sub

        Private Sub Hủy1_Execute()
            ' Write your code here.
            If flagEdit1 Then
                CType(Me.XuatSanPhamBenhs.SelectedItem, XuatSanPhamBenh).Details.DiscardChanges()
            Else
                Me.XuatSanPhamBenhs.DeleteSelected()
            End If
            Me.CloseModalWindow("GroupChiTiet")
        End Sub

        Private Sub XuatSanPhamChiTietsAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub XuatSanPhamChiTietsAddAndEditNew_Execute()
            ' Write your code here.
            Me.XuatSanPhamChiTiets.AddNew()
            Me.OpenModalWindow("GroupChiTiet") ' Write your code here.
            Me.flagEdit = False
        End Sub

        Private Sub XuatSanPhamChiTietsEditSelected_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub XuatSanPhamChiTietsEditSelected_Execute()
            ' Write your code here.
            Me.OpenModalWindow("GroupChiTiet") ' Write your code here.
            Me.flagEdit = True
        End Sub

        Private Sub XuatSanPhamBenhsAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub XuatSanPhamBenhsAddAndEditNew_Execute()
            ' Write your code here.
            Me.XuatSanPhamBenhs.AddNew()
            Me.OpenModalWindow("GroupBenh") ' Write your code here.
            Me.flagEdit1 = False
        End Sub

        Private Sub XuatSanPhamBenhsEditSelected_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub XuatSanPhamBenhsEditSelected_Execute()
            ' Write your code here.
            Me.OpenModalWindow("GroupBenh") ' Write your code here.
            Me.flagEdit1 = True
        End Sub
    End Class

End Namespace
