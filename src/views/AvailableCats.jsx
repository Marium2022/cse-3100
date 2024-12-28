import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    // Fetch cat images and set the initial list of cats
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );

        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0]?.url || '', // Add default image fallback
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages); // Initially show all cats
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  // Handle filtering by breed and search text
  useEffect(() => {
    let updatedCats = cats;

    // Filter by breed
    if (selectedBreed) {
      updatedCats = updatedCats.filter((cat) => cat.breed === selectedBreed);
    }

    // Filter by search text
    if (searchText) {
      updatedCats = updatedCats.filter((cat) =>
        cat.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredCats(updatedCats);
  }, [searchText, selectedBreed, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters */}
      <div className="filters mt-3 mb-4">
        {/* Search by Name */}
        <input
          type="text"
          placeholder="Search by name"
          className="form-control mb-3"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Filter by Breed */}
        <select
          className="form-select"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Siamese">Siamese</option>
        </select>
      </div>

      {/* Cats Display */}
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div className="cat-card">
                <img
                  src={cat.image || 'https://via.placeholder.com/200'}
                  alt={cat.name}
                  className="img-fluid mb-2"
                  style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
                />
                <div className="cat-info">
                  <h3 className="h5 mb-1">{cat.name}</h3>
                  <p className="mb-0">Age: {cat.age}</p>
                  <p className="mb-0">Breed: {cat.breed}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No cats match the current filters.</p>
        )}
      </div>
    </section>
  );
}
