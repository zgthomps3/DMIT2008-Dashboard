import '../../lib/firebase.js'
import { getDatabase, ref, set } from "firebase/database";

export default function handler(req, res) {
  const body = req.body;
  
  const key = new Date().getTime();
  const sku = Math.floor(Math.random() * 999999999999);
  
  const db = getDatabase();
  set(ref(db, `products/${key}`), {
    sku: sku,
    image: '/placeholder.png',
    title: body.title,
    price: body.price,
    qty: body.qty
  });
  
  res.redirect('/');
}