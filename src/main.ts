import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Initialize lightweight demo-tabs behavior for non-Angular consumers
import './app/shared/demo-tabs/demo-tabs.js';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
