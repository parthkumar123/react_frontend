import './App.css';
import product1 from './assests/images/1.avif'
import ServerGrid from './components/grid/server/server-grid.jsx';

function App() {
  const products = [
    {
      id: 1,
      image: product1,
      title: 'Optimized Cloud Compute',
      description: 'Virtual machines for more demanding business apps, e.g. production websites, CI/CD, video transcoding, or larger databases.',
      price: "$28.00/mo",
      buttonTitle: "Dedicated vCPU"
    }, {
      id: 2,
      image: product1,
      title: 'Cloud Compute',
      description: 'Virtual machines for apps with bursty performance, e.g. low traffic websites, blogs, CMS, dev/test environments, and small databases.',
      price: "$2.50/mo",
      buttonTitle: "Shared vCPU"
    }, {
      id: 3,
      image: product1,
      title: 'Cloud GPU',
      description: 'Virtual machines with fractional or full NVIDIA GPUs for AI, machine learning, HPC, visual computing and VDI. Also available as Bare Metal.',
      price: "$21.50/mo",
      buttonTitle: "NVIDIA GPU + Dedicated vCPU"
    }, {
      id: 4,
      image: product1,
      title: 'Bare Metal',
      description: 'Single tenant bare metal for apps with the most demanding performance or security requirements.',
      price: "$120.00/mo",
      buttonTitle: "Physical CPU + Optional GPU"
    },
    // Add more product objects here
  ];

  return (
    <>
      <div>
        <h1>Choose Server</h1>
        <ServerGrid products={products} />
      </div>
    </>
  );
}

export default App;
