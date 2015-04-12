
Namespace LightSwitchApplication

    Public Class ThuongPheBinhsListDetail

        Private Sub ThuongPheBinhListAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub ThuongPheBinhListAddAndEditNew_Execute()
            Me.ThuongPheBinhs.AddNew() ' Write your code here.
            Me.FindControl("Họ_và_Tên1").Focus()
        End Sub
    End Class

End Namespace
