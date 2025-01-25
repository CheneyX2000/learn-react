import { ItemProps } from "@/types/item";

function Item({ name, isPacked }: ItemProps) {
  return (
    <li className="item">
      {isPacked ? (<span> {name} </span>) : (<del> {name} </del>)}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          name="Laptop"
          isPacked={true}
        />
        <Item
          name="Chargers"
          isPacked={true}
        />
        <Item
          name="Socks"
          isPacked={true}
        />
      </ul>
    </section>
  );
}