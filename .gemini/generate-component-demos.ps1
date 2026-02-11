# Script to generate missing component demo structures
# This creates the basic file structure for all remaining components

$components = @(
    @{name="sidebar"; title="Sidebar"; icon="📋"; description="A flexible sidebar component for navigation with collapsible sections and custom styling"},
    @{name="animate-on-scroll"; title="Animate On Scroll"; icon="✨"; description="Animation utility component for triggering animations based on scroll position"},
    @{name="dock-overlay"; title="Dock Overlay"; icon="🪟"; description="Overlay component for docking panels and windows with drag and resize support"},
    @{name="avatar-group"; title="Avatar Group"; icon="👥"; description="Group component for displaying multiple avatars with overflow handling"},
    @{name="tab-stack"; title="Tab Stack"; icon="📚"; description="Advanced tab stacking component with drag-and-drop and grouping support"}
)

$basePath = "c:\Praveen\Personal-repo\angular\ground\src\app\demos"

foreach ($comp in $components) {
    $componentName = $comp.name
    $componentTitle = $comp.title
    $icon = $comp.icon
    $description = $comp.description
    
    $demoPath = Join-Path $basePath "set-$componentName"
    $playgroundPath = Join-Path $demoPath "components\$componentName-playground"
    
    # Create directories
    New-Item -ItemType Directory -Force -Path $demoPath | Out-Null
    New-Item -ItemType Directory -Force -Path $playgroundPath | Out-Null
    
    # Convert component name to PascalCase for class names
    $className = ($componentName -split '-' | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1) }) -join ''
    
    Write-Host "Creating demo for: $componentTitle" -ForegroundColor Green
}

Write-Host "`nAll component structures created successfully!" -ForegroundColor Cyan
