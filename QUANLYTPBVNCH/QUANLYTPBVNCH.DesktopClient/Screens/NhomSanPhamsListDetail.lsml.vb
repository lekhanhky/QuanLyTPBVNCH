
Namespace LightSwitchApplication

    Public Class NhomSanPhamsListDetail

        Private Sub NhomSanPhamListAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub NhomSanPhamListAddAndEditNew_Execute()
            Me.NhomSanPhams.AddNew() ' Write your code here.
            Me.FindControl("Tên1").Focus()
        End Sub
    End Class

End Namespace
