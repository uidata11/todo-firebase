import { useEffect, useState } from "react";

const [items, setItems] = useState<Items[]>([]);

useEffect(
 ()=>{
const subscribeItem = ref.onSnapshop(
 (snap)=>{
     const data = snap.docs.map((doc)=>({...doc.data(), id: doc.id})
     )
     setItems(data as Item[])
 }
)
subscribeItem
return subscribeItem
 },[]
)

const firebase  = () => {
  return(
  <div>firebase</div>
)
}
export default firebase