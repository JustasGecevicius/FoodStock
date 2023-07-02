import { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import MacroInput from '../../components/ingredients/MacroInput';
import { useCreateIngredientMutation } from './api';
import { Link } from 'react-router-dom';

export interface MacrosType {
  protein: number;
  carbs: number;
  fat: number;
}

export default function CreateIngredient() {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState<number | null>(null);
  const [macros, setMacros] = useState<MacrosType>({
    protein: 0,
    carbs: 0,
    fat: 0,
  });
  const [isMacrosOpen, setIsMacrosOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const [createIngredient, { isLoading }] = useCreateIngredientMutation();

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('calories', JSON.stringify(calories));
    formData.append('macros', JSON.stringify(macros));
    image && formData.append('image', image);
    await createIngredient(formData);
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <div className='flex flex-col w-screen h-screen bg-no-repeat bg-cover backgroundImage gap-y-5'>
      <div className='flex flex-col items-center bg-white grow'>
        <h2 className='w-screen text-lg text-center text-teal-900'>
          Create an Ingredient
        </h2>
        <div className='flex flex-col items-center grow gap-y-5'>
          <label
            htmlFor=''
            className='flex flex-col items-center text-center text-teal-900'>
            Name
            <input
              type='text'
              className='px-3 py-2 text-white bg-teal-700 rounded-md w-52'
              placeholder='Ingredient Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label
            htmlFor='file-input'
            className='flex flex-col items-center text-center text-teal-900'>
            Add Picture
            <input
              type='file'
              className='hidden px-3 py-2 text-white bg-teal-700 rounded-md w-52'
              onChange={(e) => setImage(e.target.files && e.target.files[0])}
              id='file-input'
            />
          </label>
          <label
            htmlFor=''
            className='flex flex-col items-center text-center text-teal-900'>
            Calories
            <input
              type='number'
              className='px-3 py-2 text-white bg-teal-700 rounded-md w-52'
              placeholder='Calories'
              onChange={(e) => setCalories(+e.target.value)}
              value={calories ? calories : undefined}
            />
          </label>
          {!isMacrosOpen && (
            <button
              className='px-3 py-1 text-white bg-teal-900 rounded-md shadow'
              onClick={() => setIsMacrosOpen(true)}>
              Add Macros
            </button>
          )}
          {isMacrosOpen && (
            <div className='flex flex-col items-center gap-y-4'>
              <h2 className='w-screen text-lg text-center text-teal-900'>
                Macros
              </h2>
              <div className='flex flex-row justify-center w-52 gap-x-5'>
                <MacroInput
                  macros={macros.protein}
                  onChange={(value: number) =>
                    setMacros((prevState) => {
                      console.log(value, 'changedValue');
                      return {
                        ...prevState,
                        protein: value,
                      };
                    })
                  }
                  label='Protein'
                />
                <MacroInput
                  macros={macros.carbs}
                  onChange={(value: number) =>
                    setMacros((prevState) => ({
                      ...prevState,
                      carbs: value < 0 ? 0 : value,
                    }))
                  }
                  label='Carbs'
                />
                <MacroInput
                  macros={macros.fat}
                  onChange={(value: number) =>
                    setMacros((prevState) => ({
                      ...prevState,
                      fat: value < 0 ? 0 : value,
                    }))
                  }
                  label='Fat'
                />
              </div>
              <button
                className='px-3 py-1 text-white bg-teal-900 rounded-md shadow'
                onClick={() => setIsMacrosOpen(false)}>
                Close Macros
              </button>
            </div>
          )}
        </div>
        <div className='flex flex-row gap-y-4'>
          <button
            className='w-20 p-0 text-teal-900 bg-transparent focus:border-transparent active:border-transparent focus:bg-transparent active:bg-transparent focus:ring-transparent active:ring-transparent'
            onClick={() => {
              handleSave();
            }}>
            Save
          </button>
          <Link to='/recipes'>
            <button className='w-20 p-0 text-teal-900 bg-transparent focus:border-transparent active:border-transparent focus:bg-transparent active:bg-transparent focus:ring-transparent active:ring-transparent'>
              Cancel
            </button>
          </Link>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
