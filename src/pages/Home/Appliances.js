import './Appliances.css'

const Appliances = () => {

  return (
    <section id="appliance-section">
      <h2 id='appliance-heading'>This Month's Picks</h2>
      <ul id="appliances">
          <li className='list-item'><a href="/" className={'appliance-item active'}>Offers</a></li>
          <li className='list-item'><a href="/" className={'appliance-item'}>Mobile</a></li>
          <li className='list-item'><a href="/" className={'appliance-item'}>TV & AV</a></li>
          <li className='list-item'><a href="/" className={'appliance-item'}>Home Appliances</a></li>
      </ul>
      <div id="appliances-container">
          
      </div>
    </section>
  );
};

export default Appliances;
