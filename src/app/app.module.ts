import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { AuthModule } from './auth/auth.module';
import { ChatAppModule } from './chat-app/chat-app.module';
import { RoutingModule } from './routing.module';

import { environment } from '../environments/environment';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({signInPath: '/chat'}),
    ChatAppModule.forRoot(),
    RoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
