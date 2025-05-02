import { useEffect, useState } from 'react';

function Menus() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://greenyellow-lapwing-434528.hostingersite.com/backend/wp-json/wp/v2/menu/5')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched menu:', data);
        // Assuming data.items is the correct field
        setMenuItems(data.items || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>Failed to load menu: {error.message}</p>;

  return (
    <nav>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menus;
