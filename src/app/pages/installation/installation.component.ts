import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Copy, Check, DownloadCloud, Terminal, Zap, Palette, Layers, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'pg-installation',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './installation.component.html',
  styleUrl: './installation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallationComponent {
  readonly LucideIcons = { Copy, Check, DownloadCloud, Terminal, Zap, Palette, Layers, ChevronRight };

  copiedCommand: string | null = null;

  copyCode(command: string) {
    navigator.clipboard.writeText(command);
    this.copiedCommand = command;
    setTimeout(() => {
      if (this.copiedCommand === command) {
        this.copiedCommand = null;
      }
    }, 2000);
  }
}
