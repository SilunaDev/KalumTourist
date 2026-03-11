import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
};

// Initialize Firebase Admin
export function initAdmin() {
  if (getApps().length === 0) {
    initializeApp(firebaseAdminConfig);
  }
}

// Get database instance
export function getDb() {
  initAdmin();
  return getDatabase();
}
