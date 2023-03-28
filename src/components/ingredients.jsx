import { useState } from 'react';
import { Form, FormGroup, FormCheck, Button } from 'react-bootstrap';
import { BsX } from 'react-icons/bs';

function App() {
  const [ingredients, setIngredients] = useState([]);

  const handleCheckboxChange = (event) => {
    const ingredient = event.target.value;
    if (event.target.checked) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    } else {
      setIngredients((prevIngredients) =>
        prevIngredients.filter((i) => i !== ingredient)
      );
    }
  };

  const handleDeleteIngredient = (ingredient) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((i) => i !== ingredient)
    );
  };

  const handleClearAll = () => {
    setIngredients([]);
  };

  const handleFindRecipes = () => {
    alert(`Selected ingredients: ${ingredients.join(', ')}`);
    // Replace alert with API call to get corresponding recipes
  };

  return (
    <div className="big_cont">
      <h1 className="title1">WHAT'S IN YOUR FRIDGE?</h1>
      <div className="second_tit">
        <span className="left_tit"> QUIK KITCHEN</span>
        <span className="right_tit">Click Here For All Ingredients</span>
      </div>
      <p className="hr"></p>
      <div className="cont">
        <Form>
          <FormGroup className="mb-3">
            <FormCheck
              className="form-check-input mt-0"
              type="checkbox"
              value="Apples"
              label="Apples"
              onChange={handleCheckboxChange}
            />
            <FormCheck
              className="form-check-input mt-0"
              type="checkbox"
              value="Baking Powder"
              label="Baking Powder"
              onChange={handleCheckboxChange}
            />
            <FormCheck
              className="form-check-input mt-0"
              type="checkbox"
              value="Bread (in General)"
              label="Bread (in General)"
              onChange={handleCheckboxChange}
            />
            {/* Continue adding the remaining checkboxes */}
          </FormGroup>
        </Form>
      </div>
      <div className="second_big_cont">
        <h5 style={{ textAlign: 'center', paddingTop: '10px' }}>
          Your Ingredients
        </h5>
        <p className="hr"></p>
        <div className="list">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="list_item">
              <span>{ingredient}</span>
              <Button
                variant="link"
                size="sm"
                onClick={() => handleDeleteIngredient(ingredient)}
              >
                <BsX />
              </Button>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="outline-danger" onClick={handleClearAll}>
            Clear all
          </Button>
          <Button
            variant="outline-primary"
            style={{ marginLeft: '10px' }}
            onClick={handleFindRecipes}
          >
            Find Recipes
          </Button>
        </div>
      </div>
    </div>
  ); 
}
export default App;