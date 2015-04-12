
Namespace LightSwitchApplication

    Public Class XuatSanPhamChiTiet

        Private Sub SanPham_Validate(results As EntityValidationResultsBuilder)
            Try
                Dim dvt As DonViTinh = Me.DataWorkspace.QuanLyTPBVNCHData.DonViTinhs_Single(Me.SanPham.DonViTinh.Id)
                Me.DonViTinh = dvt
            Catch ex As Exception

            End Try '' results.AddPropertyError("<Error-Message>")
            ' results.AddPropertyError("<Error-Message>")

        End Sub
    End Class

End Namespace
