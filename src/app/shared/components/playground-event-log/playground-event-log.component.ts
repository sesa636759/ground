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
  template: `
    <div class="event-log-container">
      <div class="header">
        <strong>Event Log</strong>
        @if (logs.length > 0) {
          <button (click)="clear.emit()" class="clear-btn">Clear</button>
        }
      </div>
      <div class="log-items">
        <div *ngFor="let log of normalizedLogs" class="log-item">
          @if (log.time) {
            <span class="timestamp">[{{ log.time }}]</span>
          }
          <span class="message">{{ log.msg }}</span>
        </div>
        @if (logs.length === 0) {
          <div class="empty-state">
            <!-- Empty state content here -->
            {{ emptyMessage }}
          </div>
        }
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
      .event-log-container {
        background: var(--surface-2, #f8f9fa);
        padding: var(--space-md) var(--space-lg);
        border-radius: var(--radius-lg, 12px);
        font-family: var(--font-mono, monospace);
        font-size: 0.85rem;
        border-left: 4px solid var(--primary, #007bff);
        color: var(--text-primary, #212529);
        box-shadow: var(--shadow-inner, inset 0 2px 4px 0 rgba(0, 0, 0, 0.06));
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
      }
      strong {
        color: var(--text-secondary, #6c757d);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .clear-btn {
        background: none;
        border: none;
        color: var(--primary);
        font-size: 0.7rem;
        cursor: pointer;
        padding: 2px 6px;
        border-radius: 4px;
        transition: background 0.2s;
        &:hover {
          background: var(--primary-light, rgba(0, 123, 255, 0.1));
        }
      }
      .log-items {
        max-height: 120px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      }
      .log-item {
        padding: 4px 0;
        border-bottom: 1px solid var(--border-light, #e9ecef);
        display: flex;
        gap: 8px;
        animation: fadeIn 0.3s ease-out;
        &:last-child {
          border-bottom: none;
        }
      }
      .timestamp {
        color: var(--text-tertiary, #adb5bd);
        white-space: nowrap;
      }
      .message {
        word-break: break-all;
      }
      .empty-state {
        color: var(--text-tertiary, #adb5bd);
        font-style: italic;
        padding: 8px 0;
        text-align: center;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-4px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
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
