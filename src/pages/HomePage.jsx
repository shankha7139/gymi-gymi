import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      Home
      <div className="font-bomber-escort">
      <h1>This is Bomber Escort Font</h1>
      <p className="font-atkinson-hyperlegible">This is Atkinson Hyperlegible Mono Font</p>
      <p className="font-playwrite-italia">This is Playwrite Italia Moderna Font</p>
    </div>
    </>
  );
}
