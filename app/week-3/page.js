import ItemList from "./item-list";

export default function Page() {
    return (
      <main className="min-h-screen">
        <h1 className="text-4xl font-bold ">Shopping List</h1>
        <br/>
        <ItemList />
      </main>
    );
  }