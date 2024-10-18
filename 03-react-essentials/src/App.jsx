import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/Tabs/TabButton';


function App() {

  function onSelect(tabSelected) {
    console.log(tabSelected)
  }



  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onSelect('components')}>Components</TabButton> {/* components compositions */}
            <TabButton onSelect={() => onSelect('jsx')}>Jsx</TabButton>
            <TabButton onSelect={() => onSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => onSelect('state')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
