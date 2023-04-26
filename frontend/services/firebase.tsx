import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const dbLocation = 'https://anitoons-app-default-rtdb.firebaseio.com/';

const firebaseConfig = { databaseURL: dbLocation };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
