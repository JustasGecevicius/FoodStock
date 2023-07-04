import Navigation from '../../components/navigation/Navigation';
import StockItem from '../../components/stockOverview/stockItem/StockItem';
import { useGetIngredientsQuery } from '../ingredients/api';
import { useAllIngredients } from './api';
import { useState } from 'react';
import Select from 'react-select';

export default function Stock() {
  const [isAddModalOpen, setIsModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState([]);

  const { data: ingredients = [], isLoading: isLoadingIngredients } =
    useGetIngredientsQuery();
  //@ts-ignore
  const handleChangeIngredients = (data) => {
    setSelectedIngredient(data);
  };

  const handleAddIngredient = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='flex-col screen background gap-y-5'>
        <div className='flex-col items-center w-screen bg-white grow'>
          <h2 className='text-center text-teal-900'>Current Stock</h2>
          <div className='flex-col grow'>
            <StockItem />
            <StockItem />
            <StockItem />
            <StockItem />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className='w-32 text-white bg-teal-900'>
            Add Ingredient
          </button>
        </div>
        <Navigation />
      </div>
      {isAddModalOpen && (
        <div className='fixed z-50 zero screen background flex-center'>
          <p
            className='fixed top-0 right-0 w-6 m-2 antialiased text-center text-teal-500 bg-white rounded-full hover:ring-2 hover:ring-teal-500 flex-center md:text-2xl aspect-square md:w-10'
            onClick={() => {
              setIsModalOpen(false);
            }}>
            &#10005;
          </p>
          <div className='flex-col p-4 bg-white flex-center rounded-xl'>
            <label
              htmlFor='ingredients'
              className='flex flex-col items-center mb-2 text-center text-teal-900 w-52'>
              Add Ingredients
              {ingredients && (
                <Select
                  options={ingredients}
                  placeholder='Select Ingredients'
                  value={selectedIngredient}
                  onChange={handleChangeIngredients}
                  isSearchable={true}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      // maxWidth: '208px',
                      minWidth: '208px',
                    }),
                  }}
                />
              )}
            </label>
            <label htmlFor='amount' className='text-center text-teal-900 w-52'>
              Grams
              <input
                type='number'
                min={0}
                className='px-3 py-2 mt-2 text-white bg-teal-700 rounded-md w-52'
              />
            </label>
            <button
              className='px-3 py-1 mt-2 text-white bg-teal-900 rounded-md'
              onClick={() => handleAddIngredient()}>
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
}
