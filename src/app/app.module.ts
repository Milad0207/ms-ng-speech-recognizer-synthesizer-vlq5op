import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BotComponent } from './components/bot/bot.component';

@NgModule({
  declarations: [AppComponent, SettingsComponent, BotComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
