
Namespace LightSwitchApplication

    Public Class SanPhamsListDetail

        Private Sub SanPhamListAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub SanPhamListAddAndEditNew_Execute()
            Me.SanPhams.AddNew() ' Write your code here.
            Me.FindControl("Tên1").Focus()
        End Sub
    End Class

End Namespace
