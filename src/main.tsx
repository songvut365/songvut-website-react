import React from "react";
import ReactDOM from "react-dom/client";
import "preline";

import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import App from "./App";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);