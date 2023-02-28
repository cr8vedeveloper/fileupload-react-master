// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyDcqDmdCpvEkVmfnjoK2Td86cp9M9mz9mU",
  authDomain: "fileuploader-da1c5.firebaseapp.com",
  projectId: "fileuploader-da1c5",
  storageBucket: "fileuploader-da1c5.appspot.com",
  messagingSenderId: "422462299091",
  appId: "1:422462299091:web:b594ec920681e7a56ded26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)