
Namespace LightSwitchApplication

    Public Class NhapSanPhamsListDetail
        Dim flagEdit As Boolean
        Private Sub NhapSanPhamListAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub NhapSanPhamListAddAndEditNew_Execute()
            ' Write your code here.
            Me.NhapSanPhams.AddNew()
            Me.FindControl("DoiTuong1").Focus()
        End Sub

        Private Sub OK_Execute()
            ' Write your code here.
            Me.CloseModalWindow("GroupChiTiet")
        End Sub

        Private Sub Hủy_Execute()
            ' Write your code here.
            If flagEdit Then
                CType(Me.NhapSanPhamChiTiets.SelectedItem, NhapSanPhamChiTiet).Details.DiscardChanges()
            Else
                Me.NhapSanPhamChiTiets.DeleteSelected()
            End If
            Me.CloseModalWindow("GroupChiTiet")
        End Sub

        Private Sub NhapSanPhamChiTietsAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub NhapSanPhamChiTietsAddAndEditNew_Execute()
            ' Write your code here.
            ' Write your code here.
            Me.NhapSanPhamChiTiets.AddNew()
            Me.OpenModalWindow("GroupChiTiet") ' Write your code here.
            Me.flagEdit = False
        End Sub

        Private Sub NhapSanPhamChiTietsEditSelected_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub NhapSanPhamChiTietsEditSelected_Execute()
            ' Write your code here.
            Me.OpenModalWindow("GroupChiTiet") ' Write your code here.
            Me.flagEdit = True
        End Sub
    End Class

End Namespace
