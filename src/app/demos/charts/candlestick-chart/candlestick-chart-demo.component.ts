import { DemoSidebarComponent } from '../../../shared/components/demo-sidebar/demo-sidebar.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandlestickChartPlaygroundComponent } from './components/candlestick-chart-playground/candlestick-chart-playground.component';
import { DemoTabsComponent } from '../../../shared/demo-tabs/demo-tabs.component';
import { ComponentDocumentationComponent } from '../../../pages/component-documentation/component-documentation.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';

import { BaseDemoComponent } from '../../../shared/base-demo.component';

@Component({
  selector: 'app-candlestick-chart-demo',
  standalone: true,
  imports: [
    CommonModule,
    CandlestickChartPlaygroundComponent,
    DemoTabsComponent,
    DemoSidebarComponent,
    ComponentDocumentationComponent,
    DemoHeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './candlestick-chart-demo.component.html',
  styleUrl: './candlestick-chart-demo.component.scss',
})
export class CandlestickChartDemoComponent extends BaseDemoComponent {
  exampleVariants = [
    { id: 'playground', title: 'Playground', icon: '🎮', color: '#8b5cf6' },
    { id: 'daily', title: 'Daily Candles', icon: '📈', color: '#6366f1' },
    { id: 'hollow', title: 'Hollow Body', icon: '🕯️', color: '#f59e0b' },
  ];

  dailyCandles = [
    { date: 'Jan 2', open: 150, high: 165, low: 145, close: 162 },
    { date: 'Jan 3', open: 162, high: 170, low: 155, close: 158 },
    { date: 'Jan 4', open: 158, high: 168, low: 150, close: 165 },
    { date: 'Jan 5', open: 165, high: 175, low: 160, close: 172 },
    { date: 'Jan 6', open: 172, high: 180, low: 165, close: 168 },
  ];

  dailyCode = `<!-- Candlestick Chart (SVG) -->
<svg width="620" height="340">
  <!-- Wick (high-low range) -->
  <line x1="72" y1="50" x2="72" y2="200" stroke="#374151" stroke-width="1.5"/>
  <!-- Bullish candle body (close > open) = green -->
  <rect x="60" y="90" width="24" height="80" fill="#10b981" rx="2"/>
  <!-- Bearish candle body (close < open) = red -->
  <rect x="132" y="110" width="24" height="60" fill="#f43f5e" rx="2"/>
  <!-- Date labels on x-axis -->
  <text x="72" y="320" text-anchor="middle" font-size="10" fill="#6b7280">Jan 2</text>
</svg>`;

  hollowCode = `<!-- Hollow Candlestick — outline only for bullish candles -->
<svg width="620" height="340">
  <!-- Bullish hollow: outlined rect -->
  <rect x="60" y="90" width="24" height="80"
    fill="none" stroke="#10b981" stroke-width="2" rx="2"/>
  <!-- Bearish filled: solid rect -->
  <rect x="132" y="110" width="24" height="60" fill="#f43f5e" rx="2"/>
</svg>`;
}
