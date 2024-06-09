import { Product } from "@prisma/client";
import { openDB } from "idb";

const DB_NAME = "offlineDB";
const STORE_NAME = "products";

export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
}

export async function addProductOffline(product: Product) {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.store.add(product);
  await tx.done;
}

export async function getOfflineProducts() {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readonly");
  const products = await tx.store.getAll();
  await tx.done;
  return products;
}

export async function clearOfflineProducts() {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.store.clear();
  await tx.done;
}
