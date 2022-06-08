-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS fishs CASCADE;

CREATE TABLE fishs (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  image VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL
);

INSERT INTO fishs (name, price, image, description, category) VALUES 
('Bass', '10', 'https://www.maine.gov/ifw/images/largemouth-bass600.jpg', 'A fish that lives in the ocean', 'freshwater'),
('Tuna', '20', 'https://www.maine.gov/ifw/images/tuna600.jpg', 'A fish that lives in the ocean', 'freshwater'),
('Salmon', '30', 'https://www.maine.gov/ifw/images/salmon600.jpg', 'A fish that lives in the ocean', 'freshwater'),
('Shark', '40', 'https://www.maine.gov/ifw/images/shark600.jpg', 'A fish that lives in the ocean', 'freshwater'),
('Sardine', '50', 'https://www.maine.gov/ifw/images/sardine600.jpg', 'A fish that lives in the ocean', 'freshwater'),
('Trout', '60', 'https://www.maine.gov/ifw/images/trout600.jpg', 'A fish that lives in the ocean', 'freshwater');
