$files = @(
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\list\list-demo.component.html"; icon = "📜"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\masonry\masonry-demo.component.html"; icon = "🧱"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\layout-manager\layout-manager-demo.component.html"; icon = "🏗️"; pattern = 'icon="\?\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\input\input-demo.component.html"; icon = "⌨️"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\empty-state\empty-state-demo.component.html"; icon = "📭"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\dashboard\dashboard-demo.component.html"; icon = "📊"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\context-menu\context-menu-demo.component.html"; icon = "🖱️"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\checkbox\checkbox-demo.component.html"; icon = "✅"; pattern = 'icon="\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\code-editor\code-editor-demo.component.html"; icon = "💻"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\card\card-demo.component.html"; icon = "🎴"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\carousel\carousel-demo.component.html"; icon = "🎠"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\button-toggle\button-toggle-demo.component.html"; icon = "🔘"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\avatar-group\avatar-group-demo.component.html"; icon = "👥"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\avatar\avatar-demo.component.html"; icon = "👤"; pattern = 'icon="\?\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\animate-on-scroll\animate-on-scroll-demo.component.html"; icon = "✨"; pattern = 'icon="\?"' },
    @{ path = "c:\Praveen\Personal-repo\Duplicate\AngularGround\src\app\demos\sets\anchor\anchor-demo.component.html"; icon = "⚓"; pattern = 'icon="\?"' }
)

foreach ($file in $files) {
    if (Test-Path $file.path) {
        $content = Get-Content $file.path -Raw
        $newContent = $content -replace $file.pattern, ('icon="' + $file.icon + '"')
        if ($content -ne $newContent) {
            $newContent | Set-Content $file.path -Encoding utf8
            Write-Host "Fixed: $($file.path)"
        } else {
            Write-Host "No changes needed for: $($file.path)"
        }
    } else {
        Write-Warning "File not found: $($file.path)"
    }
}
