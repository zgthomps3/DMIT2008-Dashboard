import '../../lib/firebase.js'
import { getDatabase, ref, set } from "firebase/database";

export default function handler(req, res) {
  const body = req.body;
  
  const outPrice = body.price.replace('.','');
  
  const db = getDatabase();
  set(ref(db, `products/${body.key}`), {
    sku: body.sku,
    image: '/placeholder.png',
    title: body.title,
    price: outPrice,
    qty: body.qty
  });
  
  res.redirect('/');
}