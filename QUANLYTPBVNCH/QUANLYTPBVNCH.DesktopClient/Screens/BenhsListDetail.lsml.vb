
Namespace LightSwitchApplication

    Public Class BenhsListDetail

        Private Sub BenhListAddAndEditNew_CanExecute(ByRef result As Boolean)
            ' Write your code here.

        End Sub

        Private Sub BenhListAddAndEditNew_Execute()
            Me.Benhs.AddNew() ' Write your code here.
            Me.FindControl("Tên1").Focus()
        End Sub
    End Class

End Namespace
