import { connectDB } from "./lib/database";
import MainComponent from "./components/Home";

export default function Home() {
  connectDB()
  return (
    <main className="">
<MainComponent/>
    </main>
  );
}
