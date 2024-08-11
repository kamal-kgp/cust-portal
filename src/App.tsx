import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types';
import './App.css';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      title: "Customer 01",
      description: "The sun dipped below the horizon, painting the sky in hues of orange and pink. As twilight settled in, the city came alive with twinkling lights. People hurried home from work, while others ventured out for evening activities. The air was filled with a mix of car horns, distant laughter, and the occasional barking dog. A gentle breeze carried the scent of blooming jasmine from nearby gardens. In a small café on the corner, a pianist began to play, the melodies drifting out onto the street. Despite the urban bustle, there was a sense of calm descending, as if the city was exhaling after a long day."
    }, {
      id: 2,
      title: "Customer 02",
      description: "The old bookstore stood like a sentinel on the corner, its weathered facade a testament to decades gone by. Inside, shelves sagged under the weight of countless stories, their spines a colorful tapestry of human imagination. The air was thick with the musty scent of aged paper and leather bindings. Sunlight filtered through dusty windows, illuminating dancing motes in its beams. In the back, a cat dozed atop a stack of encyclopedias, unbothered by the occasional customer who wandered in. The shopkeeper, as timeless as his wares, sat behind an antique desk, his gnarled hands gently repairing a tattered first edition, each movement a labor of love.",
    },
    {
      id: 3,
      title: "Customer 03",
      description: "The forest whispered its ancient secrets as we trekked along the winding path. Towering pines reached skyward, their branches forming a verdant canopy overhead. Beneath our feet, a carpet of fallen needles muffled our footsteps. The air was crisp and clean, filled with the earthy aroma of damp soil and fragrant herbs. A nearby stream provided a constant, soothing backdrop of gurgling water. Occasionally, a bird's call or the rustle of an unseen creature reminded us that we were guests in this wild place. As we ventured deeper into the woods, the worries of the modern world seemed to fall away, replaced by a profound sense of connection to nature.",
    },
  ]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  return (
    <div>
      <div className='heading'>Heading</div>
      <div className="app">

        <CustomerList
          customers={customers}
          selectedCustomer={selectedCustomer}
          onSelectCustomer={setSelectedCustomer}
        />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>

  );
};

export default App;