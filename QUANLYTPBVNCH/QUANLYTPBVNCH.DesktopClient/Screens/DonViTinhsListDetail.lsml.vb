
Namespace LightSwitchApplication

    Public Class DonViTinhsListDetail

        Private Sub DonViTinhListAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub DonViTinhListAddAndEditNew_Execute()
            Me.DonViTinhs.AddNew() ' Write your code here.
            Me.FindControl("Tên1").Focus()
        End Sub
    End Class

End Namespace
