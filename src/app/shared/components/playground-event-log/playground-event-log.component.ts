import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LogEntry {
  time: string;
  msg: string;
}

@Component({
  selector: 'app-playground-event-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playground-event-log.component.html',
  styleUrl: './playground-event-log.component.scss',
})
export class PlaygroundEventLogComponent {
  @Input() logs: (string | LogEntry)[] = [];
  @Input() emptyMessage: string = 'Interact with the component to see events...';
  @Output() clear = new EventEmitter<void>();

  get normalizedLogs(): LogEntry[] {
    return this.logs.map((log) => {
      if (typeof log === 'string') {
        // If string already contains timestamp like "[12:00:00] message", try to extract it
        const match = log.match(/^\[(.*?)\] (.*)$/);
        if (match) {
          return { time: match[1], msg: match[2] };
        }
        return { time: '', msg: log };
      }
      return log;
    });
  }
}
