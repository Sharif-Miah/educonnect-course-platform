Add-Type -AssemblyName System.Drawing

function Remove-Background($inputPath, $outputPath, $threshold) {
    $bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
    $outBmp = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        for ($x = 0; $x -lt $bmp.Width; $x++) {
            $p = $bmp.GetPixel($x, $y)
            # If all channels are above threshold (white/near white background)
            if ($p.R -ge $threshold -and $p.G -ge $threshold -and $p.B -ge $threshold) {
                $minC = [Math]::Min($p.R, [Math]::Min($p.G, $p.B))
                if ($minC -ge 248) {
                    $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
                } else {
                    $alpha = [int]([Math]::Max(0, [Math]::Min(255, (255 - $minC) * 32)))
                    $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
                }
            } else {
                $outBmp.SetPixel($x, $y, $p)
            }
        }
    }
    
    $outBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $outBmp.Dispose()
    Write-Host "Successfully saved transparent PNG: $outputPath"
}

Remove-Background "c:\Sharif\educonnect\public\assets\home\cta_teacher.jpg" "c:\Sharif\educonnect\public\assets\home\cta_teacher.png" 235
Remove-Background "c:\Sharif\educonnect\public\assets\home\cta_tutor.jpg" "c:\Sharif\educonnect\public\assets\home\cta_tutor.png" 235
