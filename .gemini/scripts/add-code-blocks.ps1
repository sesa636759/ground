# PowerShell Script to Add Code Block Scaffolding to Demos
# This script adds the CodeBlockComponent import and placeholder code examples

param(
    [Parameter(Mandatory=$true)]
    [string]$DemoName  # e.g., "set-dashboard"
)

$projectRoot = "c:\Praveen\Personal-repo\angular\ground"
$demoPath = Join-Path $projectRoot "src\app\demos\$DemoName"
$tsFile = Join-Path $demoPath "$DemoName-demo.component.ts"
$htmlFile = Join-Path $demoPath "$DemoName-demo.component.html"

Write-Host "Processing: $DemoName" -ForegroundColor Cyan

# Check if files exist
if (-not (Test-Path $tsFile)) {
    Write-Host "Error: TypeScript file not found: $tsFile" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $htmlFile)) {
    Write-Host "Error: HTML file not found: $htmlFile" -ForegroundColor Red
    exit 1
}

# Read the TypeScript file
$tsContent = Get-Content $tsFile -Raw

# Check if CodeBlockComponent is already imported
if ($tsContent -match "CodeBlockComponent") {
    Write-Host "CodeBlockComponent already imported. Skipping..." -ForegroundColor Yellow
} else {
    Write-Host "Adding CodeBlockComponent import..." -ForegroundColor Green
    
    # Add import statement
    $importLine = "import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';"
    $tsContent = $tsContent -replace "(import.*from.*playground.*component';)", "`$1`r`n$importLine"
    
    # Add to imports array
    $tsContent = $tsContent -replace "(imports:\s*\[)([^\]]+)(\])", "`$1`$2, CodeBlockComponent`$3"
    
    # Save the file
    Set-Content -Path $tsFile -Value $tsContent -NoNewline
    Write-Host "✓ Updated TypeScript file" -ForegroundColor Green
}

# Read HTML file to count sections
$htmlContent = Get-Content $htmlFile -Raw
$sectionCount = ([regex]::Matches($htmlContent, '<section class="demo-section">')).Count

Write-Host "Found $sectionCount demo sections" -ForegroundColor Cyan

# Generate code example placeholders
$codeExamples = @()
for ($i = 1; $i -le $sectionCount; $i++) {
    $codeExamples += @"
  section${i}Code = ``<app-$($DemoName.Replace('set-', ''))
  prop="value"
>
  <!-- Add your code example here -->
</app-$($DemoName.Replace('set-', ''))>``;
"@
}

Write-Host "`nGenerated code example templates:" -ForegroundColor Green
Write-Host $($codeExamples -join "`r`n`r`n")

Write-Host "`n✓ Processing complete!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Add the code examples to the component class"
Write-Host "2. Add <app-code-block> tags to the HTML template"
Write-Host "3. Update code examples with actual component usage"
