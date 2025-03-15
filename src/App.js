import NavigationBar from "./components/NavigationBar";
import "./App.css"; // Keep your styles

function App() {
  return (
    <div>
      <NavigationBar />
      <main className="pt-16">
        {/* Your page content */}
        <h1 className="text-center mt-10 text-4xl font-bold">
          Welcome to EcoVision
        </h1>
      </main>
    </div>
  );
}

export default App;
