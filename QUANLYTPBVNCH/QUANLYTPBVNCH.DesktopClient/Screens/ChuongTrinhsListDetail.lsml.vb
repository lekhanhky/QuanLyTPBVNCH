
Namespace LightSwitchApplication

    Public Class ChuongTrinhsListDetail

        Private Sub ChuongTrinhListAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub ChuongTrinhListAddAndEditNew_Execute()
            Me.ChuongTrinhs.AddNew() ' Write your code here.
            Me.FindControl("Tên1").Focus()
        End Sub
    End Class

End Namespace
