import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/Tabs/TabButton';


function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton> {/* components compositions */}
            <TabButton>Jsx</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
