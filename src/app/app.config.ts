import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp(
      {
        "projectId":"angularsesion",
        "appId":"1:588987184938:web:04fe3b72a26a0384c29053",
        "storageBucket":"angularsesion.appspot.com",
        "apiKey":"AIzaSyD8SWYCWlhVjFN2Am9cKMGLmDPgkwF_AX4",
        "authDomain":"angularsesion.firebaseapp.com",
        "messagingSenderId":"588987184938"
      }))), 
      importProvidersFrom(provideAuth(() => getAuth())), provideAnimationsAsync()]
};
